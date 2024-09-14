import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  amp_ScraperSource,
  amp_ScraperSource_GetTypes,
} from "../types/amp_ScraperSource";
import {
  amp_ScraperTimeouts,
  amp_ScraperTimeouts_GetTypes,
} from "../types/amp_ScraperTimeouts";
import {
  amp_ScraperDestination,
  amp_ScraperDestination_GetTypes,
} from "../types/amp_ScraperDestination";

export interface ScraperArgs {
  // The configuration file to use in the new scraper. For more information, see [Scraper configuration](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-configuration).
  scrapeConfiguration?: string;

  /*
Configuration block to specify where the managed scraper will collect metrics from. See `source`.

The following arguments are optional:
*/
  source?: amp_ScraperSource;

  //
  tags?: Map<string, string>;

  //
  timeouts?: amp_ScraperTimeouts;

  // a name to associate with the managed scraper. This is for your use, and does not need to be unique.
  alias?: string;

  // Configuration block for the managed scraper to send metrics to. See `destination`.
  destination?: amp_ScraperDestination;
}
export class Scraper extends DS_Resource {
  // The Amazon Resource Name (ARN) of the IAM role that provides permissions for the scraper to discover, collect, and produce metrics
  public roleArn?: string;

  // a name to associate with the managed scraper. This is for your use, and does not need to be unique.
  public alias?: string;

  // The Amazon Resource Name (ARN) of the new scraper.
  public arn?: string;

  // Configuration block for the managed scraper to send metrics to. See `destination`.
  public destination?: amp_ScraperDestination;

  // The configuration file to use in the new scraper. For more information, see [Scraper configuration](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-configuration).
  public scrapeConfiguration?: string;

  /*
Configuration block to specify where the managed scraper will collect metrics from. See `source`.

The following arguments are optional:
*/
  public source?: amp_ScraperSource;

  //
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  //
  public timeouts?: amp_ScraperTimeouts;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => amp_ScraperTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "alias",
        "a name to associate with the managed scraper. This is for your use, and does not need to be unique.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "destination",
        "Configuration block for the managed scraper to send metrics to. See `destination`.",
        () => amp_ScraperDestination_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "scrapeConfiguration",
        "The configuration file to use in the new scraper. For more information, see [Scraper configuration](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-configuration).",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "source",
        "Configuration block to specify where the managed scraper will collect metrics from. See `source`.\n\nThe following arguments are optional:",
        () => amp_ScraperSource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
