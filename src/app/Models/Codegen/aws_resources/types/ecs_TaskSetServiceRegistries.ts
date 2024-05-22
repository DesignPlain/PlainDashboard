import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ecs_TaskSetServiceRegistries {
  // The container name value, already specified in the task definition, to be used for your service discovery service.
  containerName?: string;

  // The port value, already specified in the task definition, to be used for your service discovery service.
  containerPort?: number;

  // The port value used if your Service Discovery service specified an SRV record.
  port?: number;

  // The ARN of the Service Registry. The currently supported service registry is Amazon Route 53 Auto Naming Service(`aws.servicediscovery.Service` resource). For more information, see [Service](https://docs.aws.amazon.com/Route53/latest/APIReference/API_autonaming_Service.html).
  registryArn?: string;
}

export function ecs_TaskSetServiceRegistries_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "containerPort",
      "The port value, already specified in the task definition, to be used for your service discovery service.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port value used if your Service Discovery service specified an SRV record.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "registryArn",
      "The ARN of the Service Registry. The currently supported service registry is Amazon Route 53 Auto Naming Service(`aws.servicediscovery.Service` resource). For more information, see [Service](https://docs.aws.amazon.com/Route53/latest/APIReference/API_autonaming_Service.html).",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "containerName",
      "The container name value, already specified in the task definition, to be used for your service discovery service.",
      [],
      false,
      true,
    ),
  ];
}
