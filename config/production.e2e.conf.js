import { config as baseConfig } from "../wdio.conf.js";

export const config = Object.assign(baseConfig, {
    environment: "Production",
    baseUrl: "https://automationteststore.com/",
});
