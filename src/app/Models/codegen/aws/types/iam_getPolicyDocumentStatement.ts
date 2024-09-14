import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  iam_getPolicyDocumentStatementCondition,
  iam_getPolicyDocumentStatementCondition_GetTypes,
} from "./iam_getPolicyDocumentStatementCondition";
import {
  iam_getPolicyDocumentStatementNotPrincipal,
  iam_getPolicyDocumentStatementNotPrincipal_GetTypes,
} from "./iam_getPolicyDocumentStatementNotPrincipal";
import {
  iam_getPolicyDocumentStatementPrincipal,
  iam_getPolicyDocumentStatementPrincipal_GetTypes,
} from "./iam_getPolicyDocumentStatementPrincipal";

export interface iam_getPolicyDocumentStatement {
  // Sid (statement ID) is an identifier for a policy statement.
  sid?: string;

  // Configuration block for a condition. Detailed below.
  conditions?: Array<iam_getPolicyDocumentStatementCondition>;

  // Whether this statement allows or denies the given actions. Valid values are `Allow` and `Deny`. Defaults to `Allow`.
  effect?: string;

  // Like `principals` except these are principals that the statement does -not- apply to.
  notPrincipals?: Array<iam_getPolicyDocumentStatementNotPrincipal>;

  // Configuration block for principals. Detailed below.
  principals?: Array<iam_getPolicyDocumentStatementPrincipal>;

  // List of resource ARNs that this statement applies to. This is required by AWS if used for an IAM policy. Conflicts with `not_resources`.
  resources?: Array<string>;

  // List of actions that this statement either allows or denies. For example, `["ec2:RunInstances", "s3:-"]`.
  actions?: Array<string>;

  // List of actions that this statement does -not- apply to. Use to apply a policy statement to all actions -except- those listed.
  notActions?: Array<string>;

  // List of resource ARNs that this statement does -not- apply to. Use to apply a policy statement to all resources -except- those listed. Conflicts with `resources`.
  notResources?: Array<string>;
}

export function iam_getPolicyDocumentStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "conditions",
      "Configuration block for a condition. Detailed below.",
      () => iam_getPolicyDocumentStatementCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "effect",
      "Whether this statement allows or denies the given actions. Valid values are `Allow` and `Deny`. Defaults to `Allow`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "principals",
      "Configuration block for principals. Detailed below.",
      () => iam_getPolicyDocumentStatementPrincipal_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "resources",
      "List of resource ARNs that this statement applies to. This is required by AWS if used for an IAM policy. Conflicts with `not_resources`.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "notActions",
      "List of actions that this statement does *not* apply to. Use to apply a policy statement to all actions *except* those listed.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sid",
      "Sid (statement ID) is an identifier for a policy statement.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "notPrincipals",
      "Like `principals` except these are principals that the statement does *not* apply to.",
      () => iam_getPolicyDocumentStatementNotPrincipal_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "actions",
      'List of actions that this statement either allows or denies. For example, `["ec2:RunInstances", "s3:*"]`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "notResources",
      "List of resource ARNs that this statement does *not* apply to. Use to apply a policy statement to all resources *except* those listed. Conflicts with `resources`.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
