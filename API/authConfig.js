const msalConfig = {
	auth: {
		clientId: "a3c5db0c-690b-4c48-892c-725cc68cdcfa",
		authority: `https://login.microsoftonline.com/acc76d18-a42e-4c00-b56d-ba5596a0f405`,
		clientSecret: "0qP8Q~0xZpCu0A5e386todxwfmRdUvpuf7IrmbBS",
	},
};

// With client credentials flows permissions need to be granted in the portal by a tenant administrator.
// The scope is always in the format '<resource>/.default'.
const tokenRequest = {
	scopes: ["https://graph.microsoft.com/.default"],
};

module.exports = {
	msalConfig: msalConfig,
	tokenRequest: tokenRequest,
};
