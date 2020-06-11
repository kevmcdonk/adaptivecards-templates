export default {
  identityMetadata:
    "https://login.microsoftonline.com/" + process.env.ACMS_APP_TENANT + "/v2.0/.well-known/openid-configuration",
  clientID: process.env.ACMS_APP_ID,
  validateIssuer: true,
  audience: null,
  allowMultiAudiencesInToken: false
};
