import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface FolderSettingsArgs {
  // If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.
  DisableDefaultSink?: boolean;

  /*
The folder for which to retrieve settings.


- - -
*/
  Folder?: string;

  // The resource name for the configured Cloud KMS key.
  KmsKeyName?: string;

  // The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided.
  StorageLocation?: string;
}
export class FolderSettings extends Resource {
  // The service account that will be used by the Log Router to access your Cloud KMS key.
  public KmsServiceAccountId?: string;

  // The service account for the given container. Sinks use this service account as their writerIdentity if no custom service account is provided.
  public LoggingServiceAccountId?: string;

  // The resource name of the settings.
  public Name?: string;

  // The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided.
  public StorageLocation?: string;

  // If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.
  public DisableDefaultSink?: boolean;

  /*
The folder for which to retrieve settings.


- - -
*/
  public Folder?: string;

  // The resource name for the configured Cloud KMS key.
  public KmsKeyName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.CheckBox,
        "DisableDefaultSink",
        "If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Folder",
        "The folder for which to retrieve settings.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsKeyName",
        "The resource name for the configured Cloud KMS key.",
      ),
      new DynamicUIProps(
        InputType.String,
        "StorageLocation",
        "The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided.",
      ),
    ];
  }
}
