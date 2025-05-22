"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

interface GalleryProps {
  year: string;
  imagesPerPage?: number;
}

export default function Gallery({ year, imagesPerPage = 12 }: GalleryProps) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // In a real implementation, you would dynamically fetch the image list
    // Here we're simulating it by assuming the files are already in the public folder
    async function fetchImages() {
      try {
        // This is a dummy implementation - in a real app, you'd have a server endpoint to list the files
        const response = await fetch(`/api/gallery/${year}`);
        const data = await response.json();
        setImages(data.images);
        setLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setLoading(false);
      }
    }

    fetchImages();
  }, [year]);

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const displayedImages = images.slice(startIndex, startIndex + imagesPerPage);

  const openLightbox = (index: number) => {
    setCurrentImage(startIndex + index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loader}></div>
        <p>Loading gallery...</p>
      </div>
    );
  }

  return (
    <div className={styles.galleryContainer}>
      <h1 className={styles.galleryTitle}>SYNTACS {year} Gallery</h1>

      {images.length === 0 ? (
        <p className={styles.noImages}>No images found for SYNTACS {year}.</p>
      ) : (
        <>
          <div className={styles.masonryGrid}>
            {displayedImages.map((image, index) => (
              <div
                key={index}
                className={styles.masonryItem}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={`/assets/gallery/${year}/${image}`}
                  alt={`SYNTACS ${year} - Image ${index + 1}`}
                  width={300}
                  height={200}
                  className={styles.galleryImage}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+"
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={styles.pageButton}
              >
                Previous
              </button>

              <div className={styles.pageNumbers}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`${styles.pageNumber} ${
                        currentPage === page ? styles.active : ""
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={styles.pageButton}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      {/* Lightbox */}
      {lightboxOpen && images.length > 0 && (
        <div className={styles.lightbox}>
          <button className={styles.closeButton} onClick={closeLightbox}>
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <button
            className={styles.navButton}
            onClick={prevImage}
            style={{ left: 20 }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className={styles.lightboxImageContainer}>
            <Image
              src={`/assets/gallery/${year}/${images[currentImage]}`}
              alt={`SYNTACS ${year} - Image ${currentImage + 1}`}
              fill
              className={styles.lightboxImage}
              priority
            />
          </div>

          <button
            className={styles.navButton}
            onClick={nextImage}
            style={{ right: 20 }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <div className={styles.imageCounter}>
            {currentImage + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
