async function loadHomePage() {
    return `
        <div>
            ${await loadHeroSection()}
            ${await loadFeaturedWorkSection()}
            ${await loadWhyChooseUsSection()}
            ${await loadCtaSection()}
        </div>
    `;
}

async function loadHeroSection() {
    return `
        <div class="relative min-h-screen flex items-center text-white overflow-hidden">
            <div class="absolute inset-0 z-0">
                <div class="absolute inset-0 bg-black/60 z-10"></div>
                <video
                    autoplay
                    loop
                    muted
                    playsinline
                    class="w-full h-full object-cover"
                    style="playbackRate: 0.7"
                >
                    <source 
                        src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-32807-large.mp4" 
                        type="video/mp4" 
                    />
                </video>
            </div>
            
            <div class="container relative z-20 pt-20">
                <!-- Hero content -->
            </div>
        </div>
    `;
}

// Additional section functions...