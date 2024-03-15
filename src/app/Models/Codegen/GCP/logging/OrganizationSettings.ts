import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface OrganizationSettingsArgs {
  // The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided.
  StorageLocation?: string;

  // If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.
  DisableDefaultSink?: boolean;

  // The resource name for the configured Cloud KMS key.
  KmsKeyName?: string;

  /*
The organization for which to retrieve or configure settings.


- - -
*/
  Organization?: string;
}
export class OrganizationSettings extends Resource {
  // The resource name of the settings.
  public Name?: string;

  /*
The organization for which to retrieve or configure settings.


- - -
*/
  public Organization?: string;

  // The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided.
  public StorageLocation?: string;

  // If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.
  public DisableDefaultSink?: boolean;

  // The resource name for the configured Cloud KMS key.
  public KmsKeyName?: string;

  // The service account that will be used by the Log Router to access your Cloud KMS key.
  public KmsServiceAccountId?: string;

  // The service account for the given container. Sinks use this service account as their writerIdentity if no custom service account is provided.
  public LoggingServiceAccountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "StorageLocation",
        "The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "DisableDefaultSink",
        "If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.",
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsKeyName",
        "The resource name for the configured Cloud KMS key.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Organization",
        "The organization for which to retrieve or configure settings.\n\n\n- - -",
      ),
    ];
  }
}