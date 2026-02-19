(function() {
    // ===============================
    // CONFIGURATION
    // ===============================
    const CONFIG = {

        // ==========================================================
        // MOVIE PROFILE
        // ==========================================================
        movie: {

            // ---------------------------
            // Movie Logo configuration
            // ---------------------------
            logo: {
                enabled: true, // true = show logo, false = hide logo
                movieSourceMode: "default", // default | file | parent | grandparent
                horizontal: "left", // "left" | "right" | "center"
                vertical: "top", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "9.3vh", // maximum height of the logo (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "8" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Movie Clearart configuration
            // ---------------------------
            clearart: {
                enabled: true, // true = show clearart, false = hide clearart
                movieSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the clearart (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                fallbackToLogo: false, // use logo as fallback if no clearart is available
                zIndex: "7" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Movie Disc configuration
            // ---------------------------
            disc: {
                enabled: true, // true = show disc, false = hide Disc
                movieSourceMode: "default", // default | file | parent | grandparent
                horizontal: "left", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.8vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "26vh", // maximum height of the disc (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                rotationSpeed: 15, // seconds for a full 360° rotation
                spinningDisc: true, // true = disc rotates, false = static
                zIndex: "3" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Movie Poster configuration
            // ---------------------------
            poster: {
                enabled: false, // true = show poster, false = hide poster
                movieSourceMode: "default", // default | file | parent | grandparent
                horizontal: "left", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "27vh", // maximum height of the poster (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "4" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Movie Thumb configuration
            // ---------------------------
            thumb: {
                enabled: false, // true = show thumb, false = hide thumb
                movieSourceMode: "default", // default | file | parent | grandparent
                horizontal: "left", // "left" | "right" | "center"
                vertical: "center", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the thumb (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "3" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Movie Banner configuration
            // ---------------------------
            banner: {
                enabled: true, // true = show banner, false = hide banner
                movieSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "top", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "7.5vh", // maximum height of the banner (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "5" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Movie Backdrop MAIN configuration (Background)
            // ---------------------------
            backdrop: {
                enabled: false, // true = show backdrop, false = hide backdrop
                movieSourceMode: "default", // default | file | parent | grandparent
                horizontal: "left", // "left" | "right" | "center"
                vertical: "center", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Movie Backdrop#1 configuration
            // ---------------------------
            backdrop1: {
                enabled: false, // true = show backdrop, false = hide backdrop
                movieSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Movie Backdrop#2 configuration
            // ---------------------------
            backdrop2: {
                enabled: false, // true = show backdrop, false = hide backdrop
                movieSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Movie Backdrop#3 configuration
            // ---------------------------
            backdrop3: {
                enabled: false, // true = show backdrop, false = hide backdrop
                movieSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Movie Backdrop#4 configuration
            // ---------------------------
            backdrop4: {
                enabled: false, // true = show backdrop, false = hide backdrop
                movieSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Movie Backdrop#5 configuration
            // ---------------------------
            backdrop5: {
                enabled: false, // true = show backdrop, false = hide backdrop
                movieSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Movie Backdrop#6 configuration
            // ---------------------------
            backdrop6: {
                enabled: false, // true = show backdrop, false = hide backdrop
                movieSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Movie Backdrop#7 configuration
            // ---------------------------
            backdrop7: {
                enabled: false, // true = show backdrop, false = hide backdrop
                movieSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Movie Backdrop#8 configuration
            // ---------------------------
            backdrop8: {
                enabled: false, // true = show backdrop, false = hide backdrop
                movieSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Movie Backdrop#9 configuration
            // ---------------------------
            backdrop9: {
                enabled: false, // true = show backdrop, false = hide backdrop
                movieSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Movie Hide rules
            // ---------------------------
            hideLogoWhenClearartFallback: false, // hide logo when clearart uses fallback
            hideLogoWhenClearartAvailable: false // hide logo when real clearart exists
        },

        // ==========================================================
        // EPISODE PROFILE
        // ==========================================================
        episode: {

            // ---------------------------
            // Episode Logo configuration
            // ---------------------------
            logo: {
                enabled: true, // true = show logo, false = hide logo
                tvShowSourceMode: "default", // default | episode | season | series
                horizontal: "left", // "left" | "right" | "center"
                vertical: "top", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "9.3vh", // maximum height of the logo (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "8" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Clearart configuration
            // ---------------------------
            clearart: {
                enabled: true, // true = show clearart, false = hide clearart
                tvShowSourceMode: "default", // default | episode | season | series
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the clearart (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                fallbackToLogo: false, // use logo as fallback if no clearart is available
                zIndex: "7" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Disc configuration
            // ---------------------------
            disc: {
                enabled: false, // true = show disc, false = hide disc
                tvShowSourceMode: "default", // default | episode | season | series
                horizontal: "left", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.8vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "26vh", // maximum height of the disc (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                rotationSpeed: 15, // seconds for a full 360° rotation
                spinningDisc: true, // true = disc rotates, false = static
                zIndex: "3" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Poster configuration (Primary)
            // ---------------------------
            poster: {
                enabled: false, // true = show poster, false = hide poster
                tvShowSourceMode: "default", // default | episode | season | series
                horizontal: "left", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "27vh", // maximum height of the poster (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "4" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Poster TV show (Season)
            // ---------------------------
            posterTvShowSeason: {
                enabled: true, // true = show season poster, false = hide
                seriesFallback: true, // true = fallback to series, false = no fallback
                horizontal: "left", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "27vh", // maximum height of the poster (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "4" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Poster TV show (Episode)
            // ---------------------------
            posterTvShowEpisode: {
                enabled: false, // true = show episode poster, false = hide
                seasonFallback: true, // true = fallback to season, false = no fallback
                seriesFallback: true, // true = fallback to series, false = no fallback
                horizontal: "left", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "27vh", // maximum height of the poster (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "4" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Thumb configuration (Primary)
            // ---------------------------
            thumb: {
                enabled: false, // true = show thumb, false = hide thumb
                tvShowSourceMode: "series", // default | episode | season | series
                horizontal: "left", // "left" | "right" | "center"
                vertical: "center", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the thumb (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "3" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Thumb configuration TV show (Season)
            // ---------------------------
            thumbTvShowSeason: {
                enabled: false, // true = show thumb, false = hide thumb
                seriesFallback: true, // true = fallback to series, false = no fallback
                horizontal: "right", // "left" | "right" | "center"
                vertical: "center", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the thumb (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "3" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Banner configuration (Primary)
            // ---------------------------
            banner: {
                enabled: true, // true = show banner, false = hide banner
                tvShowSourceMode: "default", // default | episode | season | series
                horizontal: "right", // "left" | "right" | "center"
                vertical: "top", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "7.5vh", // maximum height of the banner (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "5" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Banner configuration configuration TV show (Season)
            // ---------------------------
            bannerTvShowSeason: {
                enabled: false, // true = show banner, false = hide banner
                seriesFallback: true, // true = fallback to series, false = no fallback
                horizontal: "center", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "7.5vh", // maximum height of the banner (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "5" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Backdrop MAIN configuration (Background)
            // ---------------------------
            backdrop: {
                enabled: false, // true = show backdrop, false = hide backdrop
                tvShowSourceMode: "default", // default | episode | season | series
                horizontal: "left", // "left" | "right" | "center"
                vertical: "center", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Backdrop configuration TV show (Season)
            // ---------------------------
            backdropTvShowSeason: {
                enabled: false, // true = show backdrop, false = hide backdrop
                seriesFallback: true, // true = fallback to series, false = no fallback
                horizontal: "center", // "left" | "right" | "center"
                vertical: "center", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Backdrop#1 configuration
            // ---------------------------
            backdrop1: {
                enabled: false, // true = show backdrop, false = hide backdrop
                tvShowSourceMode: "default", // default | episode | season | series
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Backdrop#2 configuration
            // ---------------------------
            backdrop2: {
                enabled: false, // true = show backdrop, false = hide backdrop
                tvShowSourceMode: "default", // default | episode | season | series
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Backdrop#3 configuration
            // ---------------------------
            backdrop3: {
                enabled: false, // true = show backdrop, false = hide backdrop
                tvShowSourceMode: "default", // default | episode | season | series
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Backdrop#4 configuration
            // ---------------------------
            backdrop4: {
                enabled: false, // true = show backdrop, false = hide backdrop
                tvShowSourceMode: "default", // default | episode | season | series
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Backdrop#5 configuration
            // ---------------------------
            backdrop5: {
                enabled: false, // true = show backdrop, false = hide backdrop
                tvShowSourceMode: "default", // default | episode | season | series
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Backdrop#6 configuration
            // ---------------------------
            backdrop6: {
                enabled: false, // true = show backdrop, false = hide backdrop
                tvShowSourceMode: "default", // default | episode | season | series
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Backdrop#7 configuration
            // ---------------------------
            backdrop7: {
                enabled: false, // true = show backdrop, false = hide backdrop
                tvShowSourceMode: "default", // default | episode | season | series
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Backdrop#8 configuration
            // ---------------------------
            backdrop8: {
                enabled: false, // true = show backdrop, false = hide backdrop
                tvShowSourceMode: "default", // default | episode | season | series
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Backdrop#9 configuration
            // ---------------------------
            backdrop9: {
                enabled: false, // true = show backdrop, false = hide backdrop
                tvShowSourceMode: "default", // default | episode | season | series
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Episode Hide rules
            // ---------------------------
            hideLogoWhenClearartFallback: false, // hide logo when clearart uses fallback
            hideLogoWhenClearartAvailable: false // hide logo when real clearart exists
        },

        // ==========================================================
        // VIDEO PROFILE
        // ==========================================================
        video: {

            // ---------------------------
            // Video Logo configuration
            // ---------------------------
            logo: {
                enabled: true, // true = show logo, false = hide logo
                videoSourceMode: "default", // default | file | parent | grandparent
                horizontal: "left", // "left" | "right" | "center"
                vertical: "top", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "9.3vh", // maximum height of the logo (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "8" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Video Clearart configuration
            // ---------------------------
            clearart: {
                enabled: false, // true = show clearart, false = hide clearart
                videoSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the clearart (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                fallbackToLogo: false, // use logo as fallback if no clearart is available
                zIndex: "7" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Video Disc configuration
            // ---------------------------
            disc: {
                enabled: false, // true = show disc, false = hide disc
                videoSourceMode: "default", // default | file | parent | grandparent
                horizontal: "left", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.8vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "26vh", // maximum height of the disc (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                rotationSpeed: 15, // seconds for a full 360° rotation
                spinningDisc: true, // true = disc rotates, false = static
                zIndex: "3" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Video Poster configuration
            // ---------------------------
            poster: {
                enabled: true, // true = show poster, false = hide poster
                videoSourceMode: "default", // default | file | parent | grandparent
                horizontal: "left", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "27vh", // maximum height of the poster (must have a value, not optional)
                maxWidth: "13.5vw", // auto or optional maximum width (e.g. "20vw")
                zIndex: "4" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Video Thumb configuration
            // ---------------------------
            thumb: {
                enabled: false, // true = show thumb, false = hide thumb
                videoSourceMode: "default", // default | file | parent | grandparent
                horizontal: "left", // "left" | "right" | "center"
                vertical: "center", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the thumb (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "3" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Video Banner configuration
            // ---------------------------
            banner: {
                enabled: false, // true = show banner, false = hide banner
                videoSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "top", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "7.5vh", // maximum height of the banner (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "5" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Video Backdrop MAIN configuration (Background)
            // ---------------------------
            backdrop: {
                enabled: false, // true = show backdrop, false = hide backdrop
                videoSourceMode: "default", // default | file | parent | grandparent
                horizontal: "left", // "left" | "right" | "center"
                vertical: "center", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Video Backdrop#1 configuration
            // ---------------------------
            backdrop1: {
                enabled: false, // true = show backdrop, false = hide backdrop
                videoSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Video Backdrop#2 configuration
            // ---------------------------
            backdrop2: {
                enabled: false, // true = show backdrop, false = hide backdrop
                videoSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Video Backdrop#3 configuration
            // ---------------------------
            backdrop3: {
                enabled: false, // true = show backdrop, false = hide backdrop
                videoSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Video Backdrop#4 configuration
            // ---------------------------
            backdrop4: {
                enabled: false, // true = show backdrop, false = hide backdrop
                videoSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Video Backdrop#5 configuration
            // ---------------------------
            backdrop5: {
                enabled: false, // true = show backdrop, false = hide backdrop
                videoSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Video Backdrop#6 configuration
            // ---------------------------
            backdrop6: {
                enabled: false, // true = show backdrop, false = hide backdrop
                videoSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Video Backdrop#7 configuration
            // ---------------------------
            backdrop7: {
                enabled: false, // true = show backdrop, false = hide backdrop
                videoSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Video Backdrop#8 configuration
            // ---------------------------
            backdrop8: {
                enabled: false, // true = show backdrop, false = hide backdrop
                videoSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Video Backdrop#9 configuration
            // ---------------------------
            backdrop9: {
                enabled: false, // true = show backdrop, false = hide backdrop
                videoSourceMode: "default", // default | file | parent | grandparent
                horizontal: "right", // "left" | "right" | "center"
                vertical: "bottom", // "top" | "bottom" | "center"
                offsetLeft: "3.8vw", // distance from left edge if horizontal="left"
                offsetRight: "4.5vw", // distance from right edge if horizontal="right"
                offsetTop: "5.3vh", // distance from top edge if vertical="top"
                offsetBottom: "9.4vh", // distance from bottom edge if vertical="bottom"
                maxHeight: "18vh", // maximum height of the background (must have a value, not optional)
                maxWidth: "auto", // auto or optional maximum width (e.g. "20vw")
                zIndex: "2" // stacking layer (use only 1–9 to place the objects relative to each other in fore- or background)
            },

            // ---------------------------
            // Video Hide rules
            // ---------------------------
            hideLogoWhenClearartFallback: false, // hide logo when clearart uses fallback
            hideLogoWhenClearartAvailable: false // hide logo when real clearart exists
        }

    };

    // ===============================
    // STATE VARIABLES
    // ===============================
    const KINDS = ["movie", "episode", "video"];

    const IMAGES = {
        movie: {},
        episode: {},
        video: {}
    };

    const STATES = {
        movie: { clearartState: "none", discAngle: 0, lastFrameTime: null, discAnimationFrame: null },
        episode: { clearartState: "none", discAngle: 0, lastFrameTime: null, discAnimationFrame: null },
        video: { clearartState: "none", discAngle: 0, lastFrameTime: null, discAnimationFrame: null }
    };

    let previousItemId = null;
    let resolving = false;
    let activeKind = "video";

    // ===============================
    // CREATE IMAGE ELEMENT
    // ===============================
    const createImageElement = (cfg, isDisc = false) => {
        const el = document.createElement("img");

        Object.assign(el.style, {
            position: "fixed",
            top: cfg.vertical === "top" ? cfg.offsetTop : cfg.vertical === "center" ? "50%" : "auto",
            bottom: cfg.vertical === "bottom" ? cfg.offsetBottom : "auto",
            left: cfg.horizontal === "left" ? cfg.offsetLeft : cfg.horizontal === "center" ? "50%" : "auto",
            right: cfg.horizontal === "right" ? cfg.offsetRight : "auto",
            maxHeight: cfg.maxHeight,
            maxWidth: cfg.maxWidth === "auto" || !cfg.maxWidth ? "none" : cfg.maxWidth,
            width: "auto",
            pointerEvents: "none",
            userSelect: "none",
            filter: isDisc ? "" : "drop-shadow(0 6px 12px rgba(0,0,0,0.55))",
            opacity: "0",
            transition: "opacity 0.25s ease",
            zIndex: cfg.zIndex || "2",
            display: "none",
            transformOrigin: isDisc ? "50% 50%" : undefined,
            transform:
                (cfg.horizontal === "center" ? "translateX(-50%) " : "") +
                (cfg.vertical === "center" ? "translateY(-50%) " : "") +
                (isDisc ? "rotate(0deg)" : "")
        });

        el.draggable = false;
        document.body.appendChild(el);

        el.addEventListener("transitionend", e => {
            if (e.propertyName === "opacity" && el.style.opacity === "0") {
                el.style.display = "none";
            }
        });

        return el;
    };

    // ===============================
    // ENSURE IMAGE INSTANCES EXIST
    // ===============================
    const ensureImages = () => {
        KINDS.forEach(kind => {
            const P = CONFIG[kind];
            if (!P) return;

            if (!IMAGES[kind].logo && P.logo && P.logo.enabled) IMAGES[kind].logo = createImageElement(P.logo);
            if (!IMAGES[kind].clearart && P.clearart && P.clearart.enabled) IMAGES[kind].clearart = createImageElement(P.clearart);
            if (!IMAGES[kind].disc && P.disc && P.disc.enabled) IMAGES[kind].disc = createImageElement(P.disc, true);

            if (!IMAGES[kind].banner && P.banner && P.banner.enabled) IMAGES[kind].banner = createImageElement(P.banner);

            if (!IMAGES[kind].poster && P.poster && P.poster.enabled) IMAGES[kind].poster = createImageElement(P.poster);
            if (!IMAGES[kind].thumb && P.thumb && P.thumb.enabled) IMAGES[kind].thumb = createImageElement(P.thumb);

            if (!IMAGES[kind].backdrop && P.backdrop && P.backdrop.enabled) IMAGES[kind].backdrop = createImageElement(P.backdrop);

            if (kind === "episode") {
                if (!IMAGES[kind].bannerTvShowSeason && P.bannerTvShowSeason && P.bannerTvShowSeason.enabled)
                    IMAGES[kind].bannerTvShowSeason = createImageElement(P.bannerTvShowSeason);

                if (!IMAGES[kind].posterTvShowSeason && P.posterTvShowSeason && P.posterTvShowSeason.enabled)
                    IMAGES[kind].posterTvShowSeason = createImageElement(P.posterTvShowSeason);

                if (!IMAGES[kind].posterTvShowEpisode && P.posterTvShowEpisode && P.posterTvShowEpisode.enabled)
                    IMAGES[kind].posterTvShowEpisode = createImageElement(P.posterTvShowEpisode);

                if (!IMAGES[kind].thumbTvShowSeason && P.thumbTvShowSeason && P.thumbTvShowSeason.enabled)
                    IMAGES[kind].thumbTvShowSeason = createImageElement(P.thumbTvShowSeason);

                if (!IMAGES[kind].backdropTvShowSeason && P.backdropTvShowSeason && P.backdropTvShowSeason.enabled)
                    IMAGES[kind].backdropTvShowSeason = createImageElement(P.backdropTvShowSeason);
            }

            for (let i = 1; i <= 9; i++) {
                const key = `backdrop${i}`;
                if (!IMAGES[kind][key] && P[key] && P[key].enabled) {
                    IMAGES[kind][key] = createImageElement(P[key]);
                }
            }
        });
    };

    // ===============================
    // HELPERS
    // ===============================
    const getCurrentOsdId = () =>
        (window.NowPlayingItem && window.NowPlayingItem.Id) ||
        (document.querySelector("#videoOsdPage .btnUserRating") &&
            document.querySelector("#videoOsdPage .btnUserRating").dataset &&
            document.querySelector("#videoOsdPage .btnUserRating").dataset.id) ||
        null;

    const isVideoPage = () => window.location.href.indexOf("#/video") !== -1;

    const isOSDVisible = () => {
        const h = document.querySelector(".osdHeader");
        const b = document.querySelector(".videoOsdBottom");
        return (h && getComputedStyle(h).opacity !== "0") || (b && getComputedStyle(b).opacity !== "0");
    };

    const getKindFromItem = item => {
        if (!item || !item.Type) return "video";
        if (item.Type === "Movie") return "movie";
        if (item.Type === "Episode") return "episode";
        if (item.Type === "Video") return "video";
        return "video";
    };

    const getSourceModeForCfg = (kind, cfg) => {
        if (!cfg) return "default";
        if (kind === "episode") return cfg.tvShowSourceMode || "default";
        if (kind === "movie") return cfg.movieSourceMode || "default";
        if (kind === "video") return cfg.videoSourceMode || "default";
        return "default";
    };

    // ===============================
    // RESET IMAGES
    // ===============================
    const resetImages = () => {
        KINDS.forEach(kind => {
            const imgs = IMAGES[kind];
            if (!imgs) return;

            Object.keys(imgs).forEach(k => {
                const img = imgs[k];
                if (img) {
                    img.src = "";
                    img.style.opacity = "0";
                    img.style.display = "none";
                }
            });

            const st = STATES[kind];
            if (st && st.discAnimationFrame) {
                cancelAnimationFrame(st.discAnimationFrame);
                st.discAnimationFrame = null;
            }
            if (st) {
                st.discAngle = 0;
                st.lastFrameTime = null;
                st.clearartState = "none";
            }
        });
    };

    const hideAllKindsExcept = active => {
        KINDS.forEach(kind => {
            if (kind === active) return;
            const imgs = IMAGES[kind];
            if (!imgs) return;
            Object.keys(imgs).forEach(k => {
                const img = imgs[k];
                if (img) {
                    img.style.opacity = "0";
                    img.style.display = "none";
                }
            });
        });
    };

    // ===============================
    // LOAD IMAGE
    // ===============================
    const loadImage = (el, itemId, type, cb) => {
        if (!el || !itemId) return;

        const url = `/Items/${itemId}/Images/${type}?maxHeight=400&ts=${Date.now()}`;
        const test = new Image();

        test.onload = () => {
            el.src = url;
            el.style.display = "block";
            if (cb) cb();
        };

        test.onerror = () => {
            el.src = "";
            el.style.opacity = "0";
        };

        test.src = url;
    };

    // ===============================
    // PRIMARY ARTWORK RESOLVE CHAIN
    // ===============================
    const resolveChain = async (item, userId) => {
        const chain = [item];

        if (item.Type === "Episode") {
            if (item.SeasonId) chain.push(await ApiClient.getItem(userId, item.SeasonId));
            if (item.SeriesId) chain.push(await ApiClient.getItem(userId, item.SeriesId));
        } else if (item.Type === "Season") {
            if (item.SeriesId) chain.push(await ApiClient.getItem(userId, item.SeriesId));
        } else if (item.Type === "Video" || item.Type === "Movie") {
            if (item.ParentId) {
                const p = await ApiClient.getItem(userId, item.ParentId);
                if (p) chain.push(p);
                if (p && p.ParentId) chain.push(await ApiClient.getItem(userId, p.ParentId));
            }
        }

        return chain.filter(Boolean);
    };

    const filterChainForTvShowMode = (chain, mode) => {
        if (mode === "episode") return chain.filter(i => i.Type === "Episode");
        if (mode === "season") return chain.filter(i => i.Type === "Season");
        if (mode === "series") return chain.filter(i => i.Type === "Series");
        return chain;
    };

    const filterChainForFileParentGrandparent = (chain, mode) => {
        if (mode === "file") return chain.slice(0, 1);
        if (mode === "parent") return chain.slice(1, 2);
        if (mode === "grandparent") return chain.slice(2, 3);
        return chain;
    };

    const getScopedChain = (kind, baseChain, cfg) => {
        const mode = getSourceModeForCfg(kind, cfg);

        if (kind === "episode") return filterChainForTvShowMode(baseChain, mode);
        if (kind === "movie" || kind === "video") return filterChainForFileParentGrandparent(baseChain, mode);

        return baseChain;
    };

    // ===============================
    // SCOPED ARTWORK + OPTIONAL FALLBACK
    // ===============================
    const pickSeasonThenOptionalSeries = (baseChain, imageKey, seriesFallback) => {
        for (let i = 0; i < baseChain.length; i++) {
            const it = baseChain[i];
            if (it && it.Type === "Season" && it.ImageTags && it.ImageTags[imageKey]) return it;
        }
        if (seriesFallback) {
            for (let i = 0; i < baseChain.length; i++) {
                const it = baseChain[i];
                if (it && it.Type === "Series" && it.ImageTags && it.ImageTags[imageKey]) return it;
            }
        }
        return null;
    };

    const pickEpisodeThenOptionalSeasonThenOptionalSeries = (baseChain, imageKey, seasonFallback, seriesFallback) => {
        for (let i = 0; i < baseChain.length; i++) {
            const it = baseChain[i];
            if (it && it.Type === "Episode" && it.ImageTags && it.ImageTags[imageKey]) return it;
        }
        if (seasonFallback) {
            for (let i = 0; i < baseChain.length; i++) {
                const it = baseChain[i];
                if (it && it.Type === "Season" && it.ImageTags && it.ImageTags[imageKey]) return it;
            }
        }
        if (seriesFallback) {
            for (let i = 0; i < baseChain.length; i++) {
                const it = baseChain[i];
                if (it && it.Type === "Series" && it.ImageTags && it.ImageTags[imageKey]) return it;
            }
        }
        return null;
    };

    const pickSeasonBackdropThenOptionalSeries = (baseChain, seriesFallback) => {
        for (let i = 0; i < baseChain.length; i++) {
            const it = baseChain[i];
            if (it && it.Type === "Season" && it.BackdropImageTags && it.BackdropImageTags.length) return it;
        }
        if (seriesFallback) {
            for (let i = 0; i < baseChain.length; i++) {
                const it = baseChain[i];
                if (it && it.Type === "Series" && it.BackdropImageTags && it.BackdropImageTags.length) return it;
            }
        }
        return null;
    };

    // ===============================
    // BACKDROPS #1–#9
    // ===============================
    const resolveBackdropSlot = (kind, baseChain, cfg, img, backdropIndex) => {
        if (!cfg || !cfg.enabled || !img) return;

        const chain = getScopedChain(kind, baseChain, cfg);

        for (let i = 0; i < chain.length; i++) {
            const it = chain[i];
            if (it && it.BackdropImageTags && it.BackdropImageTags.length > backdropIndex) {
                loadImage(img, it.Id, `Backdrop/${backdropIndex}`);
                break;
            }
        }
    };

    // ===============================
    // RESOLVE & LOAD ARTWORK
    // ===============================
    const resolveAndLoadArtwork = async itemId => {
        if (resolving || !window.ApiClient || !itemId) return;
        resolving = true;

        try {
            const userId = ApiClient.getCurrentUserId();
            const item = await ApiClient.getItem(userId, itemId);
            if (!item) return;

            const kind = getKindFromItem(item);
            activeKind = kind;

            const P = CONFIG[kind];
            const imgs = IMAGES[kind];
            const st = STATES[kind];
            if (!P || !imgs || !st) return;

            hideAllKindsExcept(kind);

            const baseChain = await resolveChain(item, userId);

            st.clearartState = "none";

            if (P.clearart && P.clearart.enabled && imgs.clearart) {
                const clearartChain = getScopedChain(kind, baseChain, P.clearart);

                let clearartTarget = null;
                for (let i = 0; i < clearartChain.length; i++) {
                    const it = clearartChain[i];
                    if (it && it.ImageTags && it.ImageTags.Art) {
                        clearartTarget = it;
                        break;
                    }
                }

                if (clearartTarget) {
                    loadImage(imgs.clearart, clearartTarget.Id, "Art");
                    st.clearartState = "real";
                } else if (P.clearart.fallbackToLogo) {
                    let logoFallbackTarget = null;
                    for (let i = 0; i < clearartChain.length; i++) {
                        const it = clearartChain[i];
                        if (it && it.ImageTags && it.ImageTags.Logo) {
                            logoFallbackTarget = it;
                            break;
                        }
                    }
                    if (logoFallbackTarget) {
                        loadImage(imgs.clearart, logoFallbackTarget.Id, "Logo", () => {
                            if (P.logo && P.logo.maxHeight) imgs.clearart.style.maxHeight = P.logo.maxHeight;
                        });
                        st.clearartState = "fallback";
                    }
                }
            }

            if (P.logo && P.logo.enabled && imgs.logo) {
                const hideLogo =
                    (st.clearartState === "real" && P.hideLogoWhenClearartAvailable) ||
                    (st.clearartState === "fallback" && P.hideLogoWhenClearartFallback);

                if (!hideLogo) {
                    const logoChain = getScopedChain(kind, baseChain, P.logo);
                    for (let i = 0; i < logoChain.length; i++) {
                        const it = logoChain[i];
                        if (it && it.ImageTags && it.ImageTags.Logo) {
                            loadImage(imgs.logo, it.Id, "Logo");
                            break;
                        }
                    }
                }
            }

            if (P.disc && P.disc.enabled && imgs.disc) {
                const discChain = getScopedChain(kind, baseChain, P.disc);
                for (let i = 0; i < discChain.length; i++) {
                    const it = discChain[i];
                    if (it && it.ImageTags && it.ImageTags.Disc) {
                        loadImage(imgs.disc, it.Id, "Disc", () => {
                            if (P.disc.spinningDisc && !st.discAnimationFrame) {
                                st.discAnimationFrame = requestAnimationFrame(rotateDisc);
                            }
                        });
                        break;
                    }
                }
            }

            const resolveGeneric = (cfg, img, type) => {
                if (!cfg || !cfg.enabled || !img) return;

                const chain = getScopedChain(kind, baseChain, cfg);

                for (let i = 0; i < chain.length; i++) {
                    const it = chain[i];
                    if (!it) continue;

                    if (type === "Backdrop") {
                        if (it.BackdropImageTags && it.BackdropImageTags.length) {
                            loadImage(img, it.Id, "Backdrop/0");
                            break;
                        }
                        continue;
                    }

                    if (it.ImageTags && it.ImageTags[type]) {
                        loadImage(img, it.Id, type);
                        break;
                    }
                }
            };

            resolveGeneric(P.banner, imgs.banner, "Banner");
            resolveGeneric(P.poster, imgs.poster, "Primary");
            resolveGeneric(P.thumb, imgs.thumb, "Thumb");
            resolveGeneric(P.backdrop, imgs.backdrop, "Backdrop");

            if (kind === "episode") {
                if (P.backdropTvShowSeason && P.backdropTvShowSeason.enabled && imgs.backdropTvShowSeason) {
                    const t = pickSeasonBackdropThenOptionalSeries(baseChain, !!P.backdropTvShowSeason.seriesFallback);
                    if (t) loadImage(imgs.backdropTvShowSeason, t.Id, "Backdrop/0");
                }

                if (P.posterTvShowSeason && P.posterTvShowSeason.enabled && imgs.posterTvShowSeason) {
                    const t = pickSeasonThenOptionalSeries(baseChain, "Primary", !!P.posterTvShowSeason.seriesFallback);
                    if (t) loadImage(imgs.posterTvShowSeason, t.Id, "Primary");
                }

                if (P.bannerTvShowSeason && P.bannerTvShowSeason.enabled && imgs.bannerTvShowSeason) {
                    const t = pickSeasonThenOptionalSeries(baseChain, "Banner", !!P.bannerTvShowSeason.seriesFallback);
                    if (t) loadImage(imgs.bannerTvShowSeason, t.Id, "Banner");
                }

                if (P.thumbTvShowSeason && P.thumbTvShowSeason.enabled && imgs.thumbTvShowSeason) {
                    const t = pickSeasonThenOptionalSeries(baseChain, "Thumb", !!P.thumbTvShowSeason.seriesFallback);
                    if (t) loadImage(imgs.thumbTvShowSeason, t.Id, "Thumb");
                }

                if (P.posterTvShowEpisode && P.posterTvShowEpisode.enabled && imgs.posterTvShowEpisode) {
                    const t = pickEpisodeThenOptionalSeasonThenOptionalSeries(
                        baseChain,
                        "Primary",
                        !!P.posterTvShowEpisode.seasonFallback,
                        !!P.posterTvShowEpisode.seriesFallback
                    );
                    if (t) loadImage(imgs.posterTvShowEpisode, t.Id, "Primary");
                }
            }

            for (let i = 1; i <= 9; i++) {
                const key = `backdrop${i}`;
                resolveBackdropSlot(kind, baseChain, P[key], imgs[key], i);
            }
        } finally {
            resolving = false;
        }
    };

    // ===============================
    // DISC ROTATION LOOP
    // ===============================
    const rotateDisc = ts => {
        const v = document.querySelector("video");

        const kind = activeKind || "video";
        const P = CONFIG[kind];
        const imgs = IMAGES[kind];
        const st = STATES[kind];

        if (!P || !P.disc || !P.disc.enabled || !imgs || !imgs.disc || !st) return;

        if (v && !v.paused && st.lastFrameTime === null) st.lastFrameTime = ts;

        if (imgs.disc && imgs.disc.src && v && !v.paused && !v.ended) {
            const d = ts - (st.lastFrameTime !== null ? st.lastFrameTime : ts);
            st.discAngle += (360 / (P.disc.rotationSpeed * 1000)) * d;
            st.discAngle %= 360;

            imgs.disc.style.transform =
                (P.disc.horizontal === "center" ? "translateX(-50%) " : "") +
                (P.disc.vertical === "center" ? "translateY(-50%) " : "") +
                "rotate(" + st.discAngle + "deg)";

            st.lastFrameTime = ts;
        }

        if (v && v.paused) st.lastFrameTime = null;

        st.discAnimationFrame = requestAnimationFrame(rotateDisc);
    };

    // ===============================
    // UPDATE VISIBILITY & POSITION
    // ===============================
    const updateArtwork = () => {
        if (!isVideoPage() || !getCurrentOsdId()) {
            resetImages();
            previousItemId = null;
            return;
        }

        const itemId = getCurrentOsdId();

        if (itemId !== previousItemId) {
            resetImages();
            previousItemId = itemId;
            resolveAndLoadArtwork(itemId);
        }

        const visible = isOSDVisible();

        const isRealFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
        const isChromeMenuFullscreen = !isRealFullscreen && window.innerHeight === screen.height;
        const isFull = isRealFullscreen || isChromeMenuFullscreen;

        const currentKind = activeKind || "video";

        const P = CONFIG[currentKind] || CONFIG.video;
        const imgs = IMAGES[currentKind] || IMAGES.video;
        const st = STATES[currentKind] || STATES.video;

        hideAllKindsExcept(currentKind);

        const positioned = [
            [imgs.logo, P.logo],
            [imgs.clearart, P.clearart],
            [imgs.disc, P.disc],
            [imgs.banner, P.banner],
            [imgs.bannerTvShowSeason, P.bannerTvShowSeason],
            [imgs.poster, P.poster],
            [imgs.posterTvShowSeason, P.posterTvShowSeason],
            [imgs.posterTvShowEpisode, P.posterTvShowEpisode],
            [imgs.thumb, P.thumb],
            [imgs.thumbTvShowSeason, P.thumbTvShowSeason],
            [imgs.backdrop, P.backdrop],
            [imgs.backdropTvShowSeason, P.backdropTvShowSeason],
            [imgs.backdrop1, P.backdrop1],
            [imgs.backdrop2, P.backdrop2],
            [imgs.backdrop3, P.backdrop3],
            [imgs.backdrop4, P.backdrop4],
            [imgs.backdrop5, P.backdrop5],
            [imgs.backdrop6, P.backdrop6],
            [imgs.backdrop7, P.backdrop7],
            [imgs.backdrop8, P.backdrop8],
            [imgs.backdrop9, P.backdrop9]
        ];

        positioned.forEach(pair => {
            const img = pair[0];
            const cfg = pair[1];
            if (!img || !cfg || !cfg.enabled || !img.src) return;

            if (img === imgs.logo) {
                const hideLogo =
                    (st.clearartState === "real" && P.hideLogoWhenClearartAvailable) ||
                    (st.clearartState === "fallback" && P.hideLogoWhenClearartFallback);
                if (hideLogo) {
                    img.style.display = "none";
                    img.style.opacity = "0";
                    return;
                }
            }

            img.style.left = cfg.horizontal === "left" ? cfg.offsetLeft : cfg.horizontal === "center" ? "50%" : "auto";
            img.style.right = cfg.horizontal === "right" ? cfg.offsetRight : "auto";
            img.style.top = cfg.vertical === "top" ? cfg.offsetTop : cfg.vertical === "center" ? "50%" : "auto";

            if (cfg.vertical === "bottom") {
                img.style.bottom = isFull ? "calc(" + cfg.offsetBottom + " - 1.5vh)" : cfg.offsetBottom;
            } else {
                img.style.bottom = "auto";
            }

            if (img === imgs.clearart && st.clearartState === "fallback" && P.logo) {
                img.style.maxHeight = P.logo.maxHeight;
                img.style.maxWidth = P.logo.maxWidth === "auto" || !P.logo.maxWidth ? "none" : P.logo.maxWidth;
            } else {
                img.style.maxHeight = cfg.maxHeight;
                img.style.maxWidth = cfg.maxWidth === "auto" || !cfg.maxWidth ? "none" : cfg.maxWidth;
            }

            img.style.transform =
                (cfg.horizontal === "center" ? "translateX(-50%) " : "") +
                (cfg.vertical === "center" ? "translateY(-50%) " : "") +
                (img === imgs.disc ? "rotate(" + st.discAngle + "deg)" : "");

            img.style.display = "block";
            img.style.opacity = visible ? "1" : "0";
        });
    };

    // ===============================
    // OSD Z-INDEX FIXES
    // ===============================
    const injectZIndexFixes = () => {
        const id = "osd-zindex-fixes";
        if (document.getElementById(id)) return;

        const style = document.createElement("style");
        style.id = id;
        style.textContent = `
        .videoOsdBottom { z-index: 10 !important; }
        .skinHeader { z-index: 10 !important; }
        .playerStats { z-index: 10 !important; }
        .sliderBubbleTrack { z-index: 10 !important; }
    `;
        document.head.appendChild(style);
    };

    // ===============================
    // EVENT LISTENERS
    // ===============================
    window.addEventListener("hashchange", resetImages);
    window.addEventListener("beforeunload", resetImages);

    const observer = new MutationObserver(updateArtwork);
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["style", "class"]
    });

    // ===============================
    // INITIALIZATION
    // ===============================
    ensureImages();
    updateArtwork();
    injectZIndexFixes();
})();
