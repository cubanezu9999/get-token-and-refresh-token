const client_id = "sTerq36XSKAk21RCp40FU0NSXhyKAHIo";
const redirect_uri = "https://dexcom-api.onrender.com/callback";
const auth_url = "https://sandbox-api.dexcom.com/v2/oauth2/login";

const uri = `${auth_url}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=offline_access`;

console.log(`Please visit this URL to authorize the application: ${uri}`);
