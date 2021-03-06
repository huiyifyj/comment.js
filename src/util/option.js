import escapePath from './escape';

/**
 * Handle your input option.
 * - More to see [README](https://github.com/huiyifyj/comment.js/blob/master/README.md).
 *
 * @param {object} option Your custom option for initializating app configuration.
 * @return {object} Option that be handled.
 */
const handleOption = (option) => {

    /**
     * Default Option
     */
    const DEFAULT_OPTION = {

        /**
         * @type {HTMLDivElement} HTMLDivElement accommodate Comment System.
         */
        container: document.getElementById('coalk'),

        /**
         * Default cdn is https://gravatar.loli.net/avatar/
         * You also can use:
         * - [Official CDN](https://cn.gravatar.com/avatar/)
         * - https://gravatar.cat.net/avatar/
         * - https://cdn.v2ex.com/gravatar/
         * @type {string} Gravatar CDN.
         */
        cdn: 'https://gravatar.loli.net/avatar/',

        /**
         * @type {number} Display the comments of maxi-number.
         */
        row: 8,

        /**
         * - Language setting for i18n.
         * - Default value is your local language according to you browser.
         * @type {string}
         */
        language: (navigator.language || navigator.browserLanguage).toLowerCase(),

        /**
         * @type {string} Firebase app initializating configuration.
         */
        apiKey: '',

        /**
         * @type {string} Firebase Authentication initializating configuration.
         */
        authDomain: '',

        /**
         * @type {string} Firebase database initializating configuration.
         */
        databaseURL: '',

        /**
         * - Your website domain, such as: `blog.huiyifyj.cn`.
         * - The String don't include 'http(s)://' ...
         * @type {string} Your domain in use.
         */
        domain: option.domain || window.location.hostname,

        /**
         * @type {string} The index of comments database.
         */
        path: window.location.pathname

    };

    /**
     * Assign default values to option.
     */
    for (const KEY in DEFAULT_OPTION) {
        if (DEFAULT_OPTION.hasOwnProperty(KEY) && !option.hasOwnProperty(KEY)) {
            option[KEY] = DEFAULT_OPTION[KEY];
        }
    }

    /**
     * Judge whether character `databaseURL` is null or doesn't exist.
     * @throws {error}
     */
    if (!option.databaseURL) {
        throw `\n'databaseURL' must be non-empty strings.`;
    }

    /**
     * Judge whether character `apiKey` is null or doesn't exist.
     * @throws {error}
     */
    if (!option.apiKey) {
        throw `\n'apiKey' must be non-empty strings`;
    }

    /**
     * Judge whether character `authDomain` is null or doesn't exist.
     * @throws {error}
     */
    if (!option.authDomain) {
        throw `\n'authDomain' must be non-empty strings`;
    }

    /**
     * Make sure the comments number is greater than 0.
     * @throws {error}
     */
    if (option.row <= 0) {
        throw `\nMake sure the comments number is greater than 0.`;
    }

    /**
     * Escape path string contain `/` and index.`html|htm|jsp|php`.
     */
    option.path = escapePath(option.path.replace(/index\.(html|htm)/, ''));

    return option;

}

export default handleOption;
