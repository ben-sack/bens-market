self.__BUILD_MANIFEST = function(s, e) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, e, "static/chunks/pages/index-4456358371833828.js"],
        "/_error": ["static/chunks/pages/_error-8353112a01355ec2.js"],
        "/craft": [s, e, "static/chunks/pages/craft-c53a95945cd3cbf4.js"],
        "/craft/[id]": [s, e, "static/chunks/pages/craft/[id]-0c0871015f3a3959.js"],
        "/photos": [s, "static/chunks/pages/photos-4b3e09413354785d.js"],
        "/projects": ["static/chunks/pages/projects-d70e827e096ed102.js"],
        sortedPages: ["/", "/_app", "/_error", "/craft", "/craft/[id]", "/photos", "/projects"]
    }
}("static/chunks/675-8a7bcb32c3fc768b.js", "static/chunks/390-ca9c37027b99a588.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();