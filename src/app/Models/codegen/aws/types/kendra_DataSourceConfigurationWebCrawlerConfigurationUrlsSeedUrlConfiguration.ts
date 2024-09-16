import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration {
  // The list of seed or starting point URLs of the websites you want to crawl. The list can include a maximum of `100` seed URLs. Array Members: Minimum number of `0` items. Maximum number of `100` items. Length Constraints: Minimum length of `1`. Maximum length of `2048`.
  seedUrls?: Array<string>;

  /*
The default mode is set to `HOST_ONLY`. You can choose one of the following modes:
- `HOST_ONLY` – crawl only the website host names. For example, if the seed URL is `"abc.example.com"`, then only URLs with host name `"abc.example.com"` are crawled.
- `SUBDOMAINS` – crawl the website host names with subdomains. For example, if the seed URL is `"abc.example.com"`, then `"a.abc.example.com"` and `"b.abc.example.com"` are also crawled.
- `EVERYTHING` – crawl the website host names with subdomains and other domains that the webpages link to.
*/
  webCrawlerMode?: string;
}

export function kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'seedUrls',
      'The list of seed or starting point URLs of the websites you want to crawl. The list can include a maximum of `100` seed URLs. Array Members: Minimum number of `0` items. Maximum number of `100` items. Length Constraints: Minimum length of `1`. Maximum length of `2048`.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'webCrawlerMode',
      'The default mode is set to `HOST_ONLY`. You can choose one of the following modes:\n* `HOST_ONLY` – crawl only the website host names. For example, if the seed URL is `"abc.example.com"`, then only URLs with host name `"abc.example.com"` are crawled.\n* `SUBDOMAINS` – crawl the website host names with subdomains. For example, if the seed URL is `"abc.example.com"`, then `"a.abc.example.com"` and `"b.abc.example.com"` are also crawled.\n* `EVERYTHING` – crawl the website host names with subdomains and other domains that the webpages link to.',
      () => [],
      false,
      false,
    ),
  ];
}
