import { requestUrl } from "obsidian";

export class MetadataService {
    async fetch(url: string) {
        try {
            const response =
                await requestUrl({
                    url,
                    method: "GET",
                });

            const html = response.text;

            return {
                description:
                    this.extractMeta(
                        html,
                        "description",
                        "name"
                    ) ||
                    this.extractMeta(
                        html,
                        "og:description",
                        "property"
                    ),

                image:
                    this.extractMeta(
                        html,
                        "og:image",
                        "property"
                    ),
            };
        } catch (err) {
            console.error(err);

            return {};
        }
    }
    extractMeta(
        html: String,
        name: String,
        attr: String
    ) {
        const regex = new RegExp(
            `<meta\\s+${attr}=["']${name}["']\\s+content=["']([^"']*)["']`,
            "i"
        );

        return html.match(regex)?.[1];


    }
}
