"use client";


import Image from "next/image";

const imagesTop = [
    { src: "/oshxona-zal.jpg", alt: "O'quvchi 1", isMain: true },
    { src: "/bassen.jpg", alt: "Maktab 1" },
    { src: "/oshxona.jpg", alt: "Maktab 2" },
    { src: "/valeybol.jpg", alt: "Maktab 3" },
    { src: "/tennis.jpg", alt: "Maktab 4" },
];

const imagesBottom = [
    { src: "/it.jpg", alt: "Katta rasm", isMain: true },
    { src: "/zal.jpg", alt: "Kichik rasm 1" },
    { src: "/hamshira.jpg", alt: "Kichik rasm 2" },
    { src: "/oshxona.jpg", alt: "Kichik rasm 3" },
    { src: "/futbol.jpg", alt: "Kichik rasm 4" },
];

export default function ImageGrid() {
    // TOP SECTION
    const mainTop = imagesTop.find((img) => img.isMain);
    const smallTop = imagesTop.filter((img) => !img.isMain);
    const smallTopGroups = [smallTop.slice(0, 2), smallTop.slice(2, 4)];

    // BOTTOM SECTION
    const mainBottom = imagesBottom.find((img) => img.isMain);
    const smallBottom = imagesBottom.filter((img) => !img.isMain);
    const smallBottomGroups = [smallBottom.slice(0, 2), smallBottom.slice(2, 4)];

    return (
        <div className="bg-[##14253B]">
            <div className="container mx-auto  md:space-y-8 py-4 md:py-8">
                {/* 1-QATOR – Katta rasm chapda */}
                <div className="py-2 md:p-4">
                    {/* Mobile Layout */}
                    <div className="block md:hidden space-y-4">
                        {/* Main image full width on mobile */}
                        {mainTop && (
                            <div className="w-full h-48 sm:h-64 rounded-xl overflow-hidden">
                                <Image
                                    width={400}
                                    height={300}
                                    src={mainTop.src}
                                    alt={mainTop.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                        {/* Small images in 2x2 grid on mobile */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-4">
                            {smallTop.map((img, i) => (
                                <div key={i} className="h-24 sm:h-32 rounded-xl overflow-hidden">
                                    <Image
                                        width={200}
                                        height={150}
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:grid grid-cols-5 grid-rows-2 gap-6 h-96">
                        {mainTop && (
                            <div className="col-span-3 row-span-2 rounded-xl overflow-hidden">
                                <Image
                                    width={600}
                                    height={400}
                                    src={mainTop.src}
                                    alt={mainTop.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                        {smallTopGroups.map((group, idx) => (
                            <div
                                key={idx}
                                className="col-span-2 row-span-1 grid grid-cols-2 gap-6"
                            >
                                {group.map((img, i) => (
                                    <div key={i} className="rounded-xl overflow-hidden">
                                        <Image
                                            width={200}
                                            height={150}
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2-QATOR – Katta rasm o'ngda */}
                <div className="py-2 md:p-4">
                    {/* Mobile Layout */}
                    <div className="block md:hidden space-y-4">
                        {/* Main image full width on mobile */}
                        {mainBottom && (
                            <div className="w-full h-48 sm:h-64 rounded-xl overflow-hidden">
                                <Image
                                    width={400}
                                    height={300}
                                    src={mainBottom.src}
                                    alt={mainBottom.alt}
                                    className="w-full h-full object-cover brightness-125 contrast-125 saturate-125"
                                />
                            </div>
                        )}
                        {/* Small images in 2x2 grid on mobile */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-4">
                            {smallBottom.map((img, i) => (
                                <div key={i} className="h-24 sm:h-32 rounded-xl overflow-hidden">
                                    <Image
                                        width={200}
                                        height={150}
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover brightness-100 contrast-125 saturate-125"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:grid grid-cols-5 grid-rows-2 gap-6 h-96">
                        {smallBottomGroups.map((group, idx) => (
                            <div
                                key={idx}
                                className="col-span-1 row-span-2 grid grid-cols-1 gap-6"
                            >
                                {group.map((img, i) => (
                                    <div key={i} className="rounded-xl overflow-hidden">
                                        <Image
                                            width={200}
                                            height={150}
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover brightness-100 contrast-125 saturate-125"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}

                        {mainBottom && (
                            <div className="col-span-3 row-span-2 rounded-xl overflow-hidden">
                                <Image
                                    width={600}
                                    height={400}
                                    src={mainBottom.src}
                                    alt={mainBottom.alt}
                                    className="w-full h-full object-cover brightness-100 contrast-125 saturate-125"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}