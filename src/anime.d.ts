// src/anime.d.ts
declare module "animejs/lib/anime.es.js" {
    interface AnimeInstance {
        // Add basic methods and properties
        timeline: (params?: any) => AnimeInstance;
        random: (min: number, max: number) => number;
        stagger: (value: number) => Function;
    }

    const anime: AnimeInstance & {
        (params: any): AnimeInstance;
    };

    export default anime;
}
