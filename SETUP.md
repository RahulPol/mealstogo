## Google Authetication Setup

    - Use `auth-session` expo package for authentication
    - All information is available here[https://docs.expo.dev/versions/latest/sdk/auth-session/]

### How web browser based authentication flows work

    The typical flow for browser-based authentication in mobile apps is as follows:
        - Initiation: the user presses a sign in button

        - Open web browser: the app opens up a web browser to the authentication provider sign in page. The url that is opened for the sign in page usually includes information to identify the app, and a URL to redirect to on success. Note: the web browser should share cookies with your system web browser so that users do not need to sign in again if they are already authenticated on the system browser -- Expo's WebBrowser API takes care of this.

        - Authentication provider redirects: upon successful authentication, the authentication provider should redirect back to the application by redirecting to URL provided by the app in the query parameters on the sign in page (read more about how linking works in mobile apps), provided that the URL is in the allowlist of allowed redirect URLs. Allowlisting redirect URLs is important to prevent malicious actors from pretending to be your application. The redirect includes data in the URL (such as user id and token), either in the location hash, query parameters, or both.

    App handles redirect: the redirect is handled by the app and data is parsed from the redirect URL.

    The `auth-session` enables multiple authentication provider, one of which is Google. To enable google authentication use following doc,
        - https://docs.expo.dev/guides/authentication/#google

### Dependencies

    - expo install expo-auth-session expo-random
