import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface WorkflowArgs {
  // Description of the workflow provided by the user. Must be at most 1000 unicode characters long.
  Description?: string;

  /*
A set of key/value label pairs to assign to this Workflow.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Creates a unique name beginning with the
specified prefix. If this and name are unspecified, a random value is chosen for the name.
*/
  NamePrefix?: string;

  // The region of the workflow.
  Region?: string;

  // User-defined environment variables associated with this workflow revision. This map has a maximum length of 20. Each string can take up to 4KiB. Keys cannot be empty strings and cannot start with “GOOGLE” or “WORKFLOWS".
  UserEnvVars?: Map<string, string>;

  /*
Describes the level of platform logging to apply to calls and call responses during
executions of this workflow. If both the workflow and the execution specify a logging level,
the execution level takes precedence.
Possible values are: `CALL_LOG_LEVEL_UNSPECIFIED`, `LOG_ALL_CALLS`, `LOG_ERRORS_ONLY`, `LOG_NONE`.
*/
  CallLogLevel?: string;

  /*
The KMS key used to encrypt workflow and execution data.
Format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}
*/
  CryptoKeyName?: string;

  // Name of the Workflow.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Name of the service account associated with the latest workflow version. This service
account represents the identity of the workflow and determines what permissions the workflow has.
Format: projects/{project}/serviceAccounts/{account} or {account}.
Using - as a wildcard for the {project} or not providing one at all will infer the project from the account.
The {account} value can be the email address or the unique_id of the service account.
If not provided, workflow will use the project's default service account.
Modifying this field for an existing workflow results in a new workflow revision.
*/
  ServiceAccount?: string;

  // Workflow code to be executed. The size limit is 128KB.
  SourceContents?: string;
}
export class Workflow extends Resource {
  /*
A set of key/value label pairs to assign to this Workflow.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The region of the workflow.
  public Region?: string;

  // User-defined environment variables associated with this workflow revision. This map has a maximum length of 20. Each string can take up to 4KiB. Keys cannot be empty strings and cannot start with “GOOGLE” or “WORKFLOWS".
  public UserEnvVars?: Map<string, string>;

  /*
The KMS key used to encrypt workflow and execution data.
Format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}
*/
  public CryptoKeyName?: string;

  // Name of the Workflow.
  public Name?: string;

  // Workflow code to be executed. The size limit is 128KB.
  public SourceContents?: string;

  // The timestamp of when the workflow was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public UpdateTime?: string;

  /*
Creates a unique name beginning with the
specified prefix. If this and name are unspecified, a random value is chosen for the name.
*/
  public NamePrefix?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The revision of the workflow. A new one is generated if the service account or source contents is changed.
  public RevisionId?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Name of the service account associated with the latest workflow version. This service
account represents the identity of the workflow and determines what permissions the workflow has.
Format: projects/{project}/serviceAccounts/{account} or {account}.
Using - as a wildcard for the {project} or not providing one at all will infer the project from the account.
The {account} value can be the email address or the unique_id of the service account.
If not provided, workflow will use the project's default service account.
Modifying this field for an existing workflow results in a new workflow revision.
*/
  public ServiceAccount?: string;

  // State of the workflow deployment.
  public State?: string;

  /*
Describes the level of platform logging to apply to calls and call responses during
executions of this workflow. If both the workflow and the execution specify a logging level,
the execution level takes precedence.
Possible values are: `CALL_LOG_LEVEL_UNSPECIFIED`, `LOG_ALL_CALLS`, `LOG_ERRORS_ONLY`, `LOG_NONE`.
*/
  public CallLogLevel?: string;

  // The timestamp of when the workflow was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public CreateTime?: string;

  // Description of the workflow provided by the user. Must be at most 1000 unicode characters long.
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "NamePrefix",
        "Creates a unique name beginning with the\nspecified prefix. If this and name are unspecified, a random value is chosen for the name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the Workflow.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the workflow.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "UserEnvVars",
        'User-defined environment variables associated with this workflow revision. This map has a maximum length of 20. Each string can take up to 4KiB. Keys cannot be empty strings and cannot start with “GOOGLE” or “WORKFLOWS".',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "CallLogLevel",
        "Describes the level of platform logging to apply to calls and call responses during\nexecutions of this workflow. If both the workflow and the execution specify a logging level,\nthe execution level takes precedence.\nPossible values are: `CALL_LOG_LEVEL_UNSPECIFIED`, `LOG_ALL_CALLS`, `LOG_ERRORS_ONLY`, `LOG_NONE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "CryptoKeyName",
        "The KMS key used to encrypt workflow and execution data.\nFormat: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "Name of the service account associated with the latest workflow version. This service\naccount represents the identity of the workflow and determines what permissions the workflow has.\nFormat: projects/{project}/serviceAccounts/{account} or {account}.\nUsing - as a wildcard for the {project} or not providing one at all will infer the project from the account.\nThe {account} value can be the email address or the unique_id of the service account.\nIf not provided, workflow will use the project's default service account.\nModifying this field for an existing workflow results in a new workflow revision.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the workflow provided by the user. Must be at most 1000 unicode characters long.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "A set of key/value label pairs to assign to this Workflow.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceContents",
        "Workflow code to be executed. The size limit is 128KB.",
        [],
        false,
        false,
      ),
    ];
  }
}
