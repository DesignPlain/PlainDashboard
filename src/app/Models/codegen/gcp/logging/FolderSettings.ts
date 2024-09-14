import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface FolderSettingsArgs {
  // The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided.
  storageLocation?: string;

  // If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.
  disableDefaultSink?: boolean;

  /*
The folder for which to retrieve settings.


- - -
*/
  folder?: string;

  // The resource name for the configured Cloud KMS key.
  kmsKeyName?: string;
}
export class FolderSettings extends DS_Resource {
  // If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.
  public disableDefaultSink?: boolean;

  /*
The folder for which to retrieve settings.


- - -
*/
  public folder?: string;

  // The resource name for the configured Cloud KMS key.
  public kmsKeyName?: string;

  // The service account that will be used by the Log Router to access your Cloud KMS key.
  public kmsServiceAccountId?: string;

  // The service account for the given container. Sinks use this service account as their writerIdentity if no custom service account is provided.
  public loggingServiceAccountId?: string;

  // The resource name of the settings.
  public name?: string;

  // The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided.
  public storageLocation?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "kmsKeyName",
        "The resource name for the configured Cloud KMS key.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "storageLocation",
        "The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disableDefaultSink",
        "If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "folder",
        "The folder for which to retrieve settings.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
    ];
  }
}
