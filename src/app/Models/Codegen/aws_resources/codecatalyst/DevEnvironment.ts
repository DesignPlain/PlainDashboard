import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  codecatalyst_DevEnvironmentIdes,
  codecatalyst_DevEnvironmentIdes_GetTypes,
} from "../types/codecatalyst_DevEnvironmentIdes";
import {
  codecatalyst_DevEnvironmentPersistentStorage,
  codecatalyst_DevEnvironmentPersistentStorage_GetTypes,
} from "../types/codecatalyst_DevEnvironmentPersistentStorage";
import {
  codecatalyst_DevEnvironmentRepository,
  codecatalyst_DevEnvironmentRepository_GetTypes,
} from "../types/codecatalyst_DevEnvironmentRepository";

export interface DevEnvironmentArgs {
  // Information about the integrated development environment (IDE) configured for a Dev Environment.
  ides?: codecatalyst_DevEnvironmentIdes;

  // The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.
  inactivityTimeoutMinutes?: number;

  /*
The Amazon EC2 instace type to use for the Dev Environment. Valid values include dev.standard1.small,dev.standard1.medium,dev.standard1.large,dev.standard1.xlarge

The following arguments are optional:
*/
  instanceType?: string;

  // Information about the amount of storage allocated to the Dev Environment.
  persistentStorage?: codecatalyst_DevEnvironmentPersistentStorage;

  // The name of the project in the space.
  projectName?: string;

  // The source repository that contains the branch to clone into the Dev Environment.
  repositories?: Array<codecatalyst_DevEnvironmentRepository>;

  // The name of the space.
  spaceName?: string;

  //
  alias?: string;
}
export class DevEnvironment extends Resource {
  /*
The Amazon EC2 instace type to use for the Dev Environment. Valid values include dev.standard1.small,dev.standard1.medium,dev.standard1.large,dev.standard1.xlarge

The following arguments are optional:
*/
  public instanceType?: string;

  // Information about the amount of storage allocated to the Dev Environment.
  public persistentStorage?: codecatalyst_DevEnvironmentPersistentStorage;

  // The name of the project in the space.
  public projectName?: string;

  // The source repository that contains the branch to clone into the Dev Environment.
  public repositories?: Array<codecatalyst_DevEnvironmentRepository>;

  // The name of the space.
  public spaceName?: string;

  //
  public alias?: string;

  // Information about the integrated development environment (IDE) configured for a Dev Environment.
  public ides?: codecatalyst_DevEnvironmentIdes;

  // The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.
  public inactivityTimeoutMinutes?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "spaceName",
        "The name of the space.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(InputType.String, "alias", "", [], false, false),
      new DynamicUIProps(
        InputType.Object,
        "ides",
        "Information about the integrated development environment (IDE) configured for a Dev Environment.",
        codecatalyst_DevEnvironmentIdes_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "inactivityTimeoutMinutes",
        "The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceType",
        "The Amazon EC2 instace type to use for the Dev Environment. Valid values include dev.standard1.small,dev.standard1.medium,dev.standard1.large,dev.standard1.xlarge\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "persistentStorage",
        "Information about the amount of storage allocated to the Dev Environment.",
        codecatalyst_DevEnvironmentPersistentStorage_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "projectName",
        "The name of the project in the space.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "repositories",
        "The source repository that contains the branch to clone into the Dev Environment.",
        codecatalyst_DevEnvironmentRepository_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
