(() => {

    "use strict";


    /**
     * ========================================================
     * CONFIGURATION
     * ========================================================
     */

    const config =
        window.BLESSINGS_WALLET_CONFIG || {};



    /**
     * ========================================================
     * MOBILE NAVIGATION
     * ========================================================
     */

    const menuButton =
        document.querySelector("[data-menu]");

    const navigation =
        document.querySelector("[data-nav]");


    if (menuButton && navigation) {

        menuButton.addEventListener(
            "click",
            function () {

                const isOpen =
                    navigation.classList.toggle("open");


                menuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }
        );


        /**
         * Close menu after clicking
         * a navigation link.
         */
        navigation
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navigation.classList.remove("open");

                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });


        /**
         * Close menu when clicking
         * outside of the navigation.
         */
        document.addEventListener(
            "click",
            function (event) {

                if (
                    !navigation.contains(event.target) &&
                    !menuButton.contains(event.target)
                ) {

                    navigation.classList.remove("open");

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    }



    /**
     * ========================================================
     * GOOGLE PLAY BUTTON
     * ========================================================
     */

    document
        .querySelectorAll("[data-play-link]")
        .forEach(function (button) {


            /**
             * Play Store URL exists.
             */
            if (config.playStoreUrl) {

                button.href =
                    config.playStoreUrl;

                button.removeAttribute(
                    "aria-disabled"
                );

                button.classList.remove(
                    "is-disabled"
                );

            }


            /**
             * Play Store URL not available yet.
             */
            else {

                button.href = "#";

                button.setAttribute(
                    "aria-disabled",
                    "true"
                );

                button.classList.add(
                    "is-disabled"
                );


                button.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        showToast(
                            "Google Play listing coming soon."
                        );

                    }
                );

            }

        });



    /**
     * ========================================================
     * SUPPORT EMAIL
     * ========================================================
     */

    document
        .querySelectorAll("[data-support-email]")
        .forEach(function (element) {


            const email =
                config.supportEmail ||
                "YOUR_SUPPORT_EMAIL@example.com";


            element.textContent =
                email;


            if (
                element.tagName.toLowerCase() === "a"
            ) {

                element.href =
                    "mailto:" + email;

            }

        });



    /**
     * ========================================================
     * CURRENT YEAR
     * ========================================================
     */

    document
        .querySelectorAll("[data-year]")
        .forEach(function (element) {

            element.textContent =
                new Date().getFullYear();

        });



    /**
     * ========================================================
     * TOAST
     * ========================================================
     */

    function showToast(message) {

        let toast =
            document.querySelector(".toast");


        /**
         * Create toast if it doesn't exist.
         */
        if (!toast) {

            toast =
                document.createElement("div");

            toast.className =
                "toast";

            toast.setAttribute(
                "role",
                "status"
            );

            document.body.appendChild(
                toast
            );

        }


        toast.textContent =
            message;


        toast.classList.add(
            "show"
        );


        clearTimeout(
            showToast.timer
        );


        showToast.timer =
            setTimeout(
                function () {

                    toast.classList.remove(
                        "show"
                    );

                },
                2200
            );

    }


})();
