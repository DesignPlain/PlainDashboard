import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appflow_FlowTriggerConfigTriggerPropertiesScheduled {
  // Whether a scheduled flow has an incremental data transfer or a complete data transfer for each flow run. Valid values are `Incremental` and `Complete`.
  dataPullMode?: string;

  // Date range for the records to import from the connector in the first flow run. Must be a valid RFC3339 timestamp.
  firstExecutionFrom?: string;

  // Scheduled end time for a schedule-triggered flow. Must be a valid RFC3339 timestamp.
  scheduleEndTime?: string;

  // Scheduling expression that determines the rate at which the schedule will run, for example `rate(5minutes)`.
  scheduleExpression?: string;

  // Optional offset that is added to the time interval for a schedule-triggered flow. Maximum value of 36000.
  scheduleOffset?: number;

  // Scheduled start time for a schedule-triggered flow. Must be a valid RFC3339 timestamp.
  scheduleStartTime?: string;

  /*
Time zone used when referring to the date and time of a scheduled-triggered flow, such as `America/New_York`.

```java
package generated_program;

import com.pulumi.Context;
import com.pulumi.Pulumi;
import com.pulumi.core.Output;
import com.pulumi.aws.appflow.Flow;
import com.pulumi.aws.appflow.FlowArgs;
import com.pulumi.aws.appflow.inputs.FlowTriggerConfigArgs;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;

public class App {
    public static void main(String[] args) {
        Pulumi.run(App::stack);
    }

    public static void stack(Context ctx) {
        var example = new Flow("example", FlowArgs.builder()        
            .triggerConfig(FlowTriggerConfigArgs.builder()
                .scheduled(%!!(MISSING)v(PANIC=Format method: runtime error: invalid memory address or nil pointer dereference))
                .build())
            .build());

    }
}
```
```yaml
resources:
  example:
    type: aws:appflow:Flow
    properties:
      triggerConfig:
        scheduled:
          - scheduleExpression: rate(1minutes)
```
*/
  timezone?: string;
}

export function appflow_FlowTriggerConfigTriggerPropertiesScheduled_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "scheduleOffset",
      "Optional offset that is added to the time interval for a schedule-triggered flow. Maximum value of 36000.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scheduleStartTime",
      "Scheduled start time for a schedule-triggered flow. Must be a valid RFC3339 timestamp.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timezone",
      'Time zone used when referring to the date and time of a scheduled-triggered flow, such as `America/New_York`.\n\n```java\npackage generated_program;\n\nimport com.pulumi.Context;\nimport com.pulumi.Pulumi;\nimport com.pulumi.core.Output;\nimport com.pulumi.aws.appflow.Flow;\nimport com.pulumi.aws.appflow.FlowArgs;\nimport com.pulumi.aws.appflow.inputs.FlowTriggerConfigArgs;\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.io.File;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\n\npublic class App {\n    public static void main(String[] args) {\n        Pulumi.run(App::stack);\n    }\n\n    public static void stack(Context ctx) {\n        var example = new Flow("example", FlowArgs.builder()        \n            .triggerConfig(FlowTriggerConfigArgs.builder()\n                .scheduled(%!v(PANIC=Format method: runtime error: invalid memory address or nil pointer dereference))\n                .build())\n            .build());\n\n    }\n}\n```\n```yaml\nresources:\n  example:\n    type: aws:appflow:Flow\n    properties:\n      triggerConfig:\n        scheduled:\n          - scheduleExpression: rate(1minutes)\n```',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataPullMode",
      "Whether a scheduled flow has an incremental data transfer or a complete data transfer for each flow run. Valid values are `Incremental` and `Complete`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "firstExecutionFrom",
      "Date range for the records to import from the connector in the first flow run. Must be a valid RFC3339 timestamp.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scheduleEndTime",
      "Scheduled end time for a schedule-triggered flow. Must be a valid RFC3339 timestamp.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scheduleExpression",
      "Scheduling expression that determines the rate at which the schedule will run, for example `rate(5minutes)`.",
      [],
      true,
      false,
    ),
  ];
}
