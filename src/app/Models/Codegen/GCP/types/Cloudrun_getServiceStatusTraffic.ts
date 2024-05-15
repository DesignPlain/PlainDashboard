import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrun_getServiceStatusTraffic {
  // RevisionName of a specific revision to which to send this portion of traffic.
  RevisionName?: string;

  // Tag is optionally used to expose a dedicated url for referencing this target exclusively.
  Tag?: string;

  /*
URL displays the URL for accessing tagged traffic targets. URL is displayed in status,
and is disallowed on spec. URL must contain a scheme (e.g. http://) and a hostname,
but may not contain anything else (e.g. basic auth, url path, etc.)
*/
  Url?: string;

  /*
LatestRevision may be optionally provided to indicate that the latest ready
Revision of the Configuration should be used for this traffic target. When
provided LatestRevision must be true if RevisionName is empty; it must be
false when RevisionName is non-empty.
*/
  LatestRevision?: boolean;

  // Percent specifies percent of the traffic to this Revision or Configuration.
  Percent?: number;
}

export function Cloudrun_getServiceStatusTraffic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Percent",
      "Percent specifies percent of the traffic to this Revision or Configuration.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RevisionName",
      "RevisionName of a specific revision to which to send this portion of traffic.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Tag",
      "Tag is optionally used to expose a dedicated url for referencing this target exclusively.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Url",
      "URL displays the URL for accessing tagged traffic targets. URL is displayed in status,\nand is disallowed on spec. URL must contain a scheme (e.g. http://) and a hostname,\nbut may not contain anything else (e.g. basic auth, url path, etc.)",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "LatestRevision",
      "LatestRevision may be optionally provided to indicate that the latest ready\nRevision of the Configuration should be used for this traffic target. When\nprovided LatestRevision must be true if RevisionName is empty; it must be\nfalse when RevisionName is non-empty.",
      [],
      true,
      false,
    ),
  ];
}
