'use client';

import { AnimatedReveal } from './animated-reveal';
import { useLocale } from '@/lib/i18n';

interface Props {
  images: string[];
}

export function GallerySection({ images }: Props) {
  const { t } = useLocale();

  return (
    <section id="gallery" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedReveal>
          <h2
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#ee5b2b] to-[#f59e0b] bg-clip-text text-transparent"
          >
            {t('gallery.title')}
          </h2>
        </AnimatedReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <AnimatedReveal key={i} delay={i * 50}>
              <div
                className="aspect-square rounded-xl overflow-hidden group border border-black/5 dark:border-white/5 hover:border-[#ee5b2b]/20 transition-colors duration-300"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
