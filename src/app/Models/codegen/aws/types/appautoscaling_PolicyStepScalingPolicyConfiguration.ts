import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appautoscaling_PolicyStepScalingPolicyConfigurationStepAdjustment,
  appautoscaling_PolicyStepScalingPolicyConfigurationStepAdjustment_GetTypes,
} from "./appautoscaling_PolicyStepScalingPolicyConfigurationStepAdjustment";

export interface appautoscaling_PolicyStepScalingPolicyConfiguration {
  // Whether the adjustment is an absolute number or a percentage of the current capacity. Valid values are `ChangeInCapacity`, `ExactCapacity`, and `PercentChangeInCapacity`.
  adjustmentType?: string;

  // Amount of time, in seconds, after a scaling activity completes and before the next scaling activity can start.
  cooldown?: number;

  // Aggregation type for the policy's metrics. Valid values are "Minimum", "Maximum", and "Average". Without a value, AWS will treat the aggregation type as "Average".
  metricAggregationType?: string;

  // Minimum number to adjust your scalable dimension as a result of a scaling activity. If the adjustment type is PercentChangeInCapacity, the scaling policy changes the scalable dimension of the scalable target by this amount.
  minAdjustmentMagnitude?: number;

  /*
Set of adjustments that manage scaling. These have the following structure:

<!--Start PulumiCodeChooser -->
```typescript
import - as pulumi from "@pulumi/pulumi";
import - as aws from "@pulumi/aws";

const ecsPolicy = new aws.appautoscaling.Policy("ecs_policy", {stepScalingPolicyConfiguration: {
    stepAdjustments: [
        {
            metricIntervalLowerBound: "1",
            metricIntervalUpperBound: "2",
            scalingAdjustment: -1,
        },
        {
            metricIntervalLowerBound: "2",
            metricIntervalUpperBound: "3",
            scalingAdjustment: 1,
        },
    ],
}});
```
```python
import pulumi
import pulumi_aws as aws

ecs_policy = aws.appautoscaling.Policy("ecs_policy", step_scaling_policy_configuration={
    "step_adjustments": [
        {
            "metric_interval_lower_bound": "1",
            "metric_interval_upper_bound": "2",
            "scaling_adjustment": -1,
        },
        {
            "metric_interval_lower_bound": "2",
            "metric_interval_upper_bound": "3",
            "scaling_adjustment": 1,
        },
    ],
})
```
```csharp
using System.Collections.Generic;
using System.Linq;
using Pulumi;
using Aws = Pulumi.Aws;

return await Deployment.RunAsync(() => 
{
    var ecsPolicy = new Aws.AppAutoScaling.Policy("ecs_policy", new()
    {
        StepScalingPolicyConfiguration = new Aws.AppAutoScaling.Inputs.PolicyStepScalingPolicyConfigurationArgs
        {
            StepAdjustments = new[]
            {
                new Aws.AppAutoScaling.Inputs.PolicyStepScalingPolicyConfigurationStepAdjustmentArgs
                {
                    MetricIntervalLowerBound = "1",
                    MetricIntervalUpperBound = "2",
                    ScalingAdjustment = -1,
                },
                new Aws.AppAutoScaling.Inputs.PolicyStepScalingPolicyConfigurationStepAdjustmentArgs
                {
                    MetricIntervalLowerBound = "2",
                    MetricIntervalUpperBound = "3",
                    ScalingAdjustment = 1,
                },
            },
        },
    });

});
```
```go
package main

import (
	"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/appautoscaling"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	pulumi.Run(func(ctx -pulumi.Context) error {
		_, err := appautoscaling.NewPolicy(ctx, "ecs_policy", &appautoscaling.PolicyArgs{
			StepScalingPolicyConfiguration: &appautoscaling.PolicyStepScalingPolicyConfigurationArgs{
				StepAdjustments: appautoscaling.PolicyStepScalingPolicyConfigurationStepAdjustmentArray{
					&appautoscaling.PolicyStepScalingPolicyConfigurationStepAdjustmentArgs{
						MetricIntervalLowerBound: pulumi.String("1"),
						MetricIntervalUpperBound: pulumi.String("2"),
						ScalingAdjustment:        int(-1),
					},
					&appautoscaling.PolicyStepScalingPolicyConfigurationStepAdjustmentArgs{
						MetricIntervalLowerBound: pulumi.String("2"),
						MetricIntervalUpperBound: pulumi.String("3"),
						ScalingAdjustment:        pulumi.Int(1),
					},
				},
			},
		})
		if err != nil {
			return err
		}
		return nil
	})
}
```
```yaml
resources:
  ecsPolicy:
    type: aws:appautoscaling:Policy
    name: ecs_policy
    properties:
      stepScalingPolicyConfiguration:
        stepAdjustments:
          - metricIntervalLowerBound: 1
            metricIntervalUpperBound: 2
            scalingAdjustment: -1
          - metricIntervalLowerBound: 2
            metricIntervalUpperBound: 3
            scalingAdjustment: 1
```
<!--End PulumiCodeChooser -->
*/
  stepAdjustments?: Array<appautoscaling_PolicyStepScalingPolicyConfigurationStepAdjustment>;
}

export function appautoscaling_PolicyStepScalingPolicyConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "adjustmentType",
      "Whether the adjustment is an absolute number or a percentage of the current capacity. Valid values are `ChangeInCapacity`, `ExactCapacity`, and `PercentChangeInCapacity`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "cooldown",
      "Amount of time, in seconds, after a scaling activity completes and before the next scaling activity can start.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metricAggregationType",
      'Aggregation type for the policy\'s metrics. Valid values are "Minimum", "Maximum", and "Average". Without a value, AWS will treat the aggregation type as "Average".',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minAdjustmentMagnitude",
      "Minimum number to adjust your scalable dimension as a result of a scaling activity. If the adjustment type is PercentChangeInCapacity, the scaling policy changes the scalable dimension of the scalable target by this amount.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "stepAdjustments",
      'Set of adjustments that manage scaling. These have the following structure:\n\n<!--Start PulumiCodeChooser -->\n```typescript\nimport * as pulumi from "@pulumi/pulumi";\nimport * as aws from "@pulumi/aws";\n\nconst ecsPolicy = new aws.appautoscaling.Policy("ecs_policy", {stepScalingPolicyConfiguration: {\n    stepAdjustments: [\n        {\n            metricIntervalLowerBound: "1",\n            metricIntervalUpperBound: "2",\n            scalingAdjustment: -1,\n        },\n        {\n            metricIntervalLowerBound: "2",\n            metricIntervalUpperBound: "3",\n            scalingAdjustment: 1,\n        },\n    ],\n}});\n```\n```python\nimport pulumi\nimport pulumi_aws as aws\n\necs_policy = aws.appautoscaling.Policy("ecs_policy", step_scaling_policy_configuration={\n    "step_adjustments": [\n        {\n            "metric_interval_lower_bound": "1",\n            "metric_interval_upper_bound": "2",\n            "scaling_adjustment": -1,\n        },\n        {\n            "metric_interval_lower_bound": "2",\n            "metric_interval_upper_bound": "3",\n            "scaling_adjustment": 1,\n        },\n    ],\n})\n```\n```csharp\nusing System.Collections.Generic;\nusing System.Linq;\nusing Pulumi;\nusing Aws = Pulumi.Aws;\n\nreturn await Deployment.RunAsync(() => \n{\n    var ecsPolicy = new Aws.AppAutoScaling.Policy("ecs_policy", new()\n    {\n        StepScalingPolicyConfiguration = new Aws.AppAutoScaling.Inputs.PolicyStepScalingPolicyConfigurationArgs\n        {\n            StepAdjustments = new[]\n            {\n                new Aws.AppAutoScaling.Inputs.PolicyStepScalingPolicyConfigurationStepAdjustmentArgs\n                {\n                    MetricIntervalLowerBound = "1",\n                    MetricIntervalUpperBound = "2",\n                    ScalingAdjustment = -1,\n                },\n                new Aws.AppAutoScaling.Inputs.PolicyStepScalingPolicyConfigurationStepAdjustmentArgs\n                {\n                    MetricIntervalLowerBound = "2",\n                    MetricIntervalUpperBound = "3",\n                    ScalingAdjustment = 1,\n                },\n            },\n        },\n    });\n\n});\n```\n```go\npackage main\n\nimport (\n\t"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/appautoscaling"\n\t"github.com/pulumi/pulumi/sdk/v3/go/pulumi"\n)\n\nfunc main() {\n\tpulumi.Run(func(ctx *pulumi.Context) error {\n\t\t_, err := appautoscaling.NewPolicy(ctx, "ecs_policy", &appautoscaling.PolicyArgs{\n\t\t\tStepScalingPolicyConfiguration: &appautoscaling.PolicyStepScalingPolicyConfigurationArgs{\n\t\t\t\tStepAdjustments: appautoscaling.PolicyStepScalingPolicyConfigurationStepAdjustmentArray{\n\t\t\t\t\t&appautoscaling.PolicyStepScalingPolicyConfigurationStepAdjustmentArgs{\n\t\t\t\t\t\tMetricIntervalLowerBound: pulumi.String("1"),\n\t\t\t\t\t\tMetricIntervalUpperBound: pulumi.String("2"),\n\t\t\t\t\t\tScalingAdjustment:        int(-1),\n\t\t\t\t\t},\n\t\t\t\t\t&appautoscaling.PolicyStepScalingPolicyConfigurationStepAdjustmentArgs{\n\t\t\t\t\t\tMetricIntervalLowerBound: pulumi.String("2"),\n\t\t\t\t\t\tMetricIntervalUpperBound: pulumi.String("3"),\n\t\t\t\t\t\tScalingAdjustment:        pulumi.Int(1),\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t},\n\t\t})\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t\treturn nil\n\t})\n}\n```\n```yaml\nresources:\n  ecsPolicy:\n    type: aws:appautoscaling:Policy\n    name: ecs_policy\n    properties:\n      stepScalingPolicyConfiguration:\n        stepAdjustments:\n          - metricIntervalLowerBound: 1\n            metricIntervalUpperBound: 2\n            scalingAdjustment: -1\n          - metricIntervalLowerBound: 2\n            metricIntervalUpperBound: 3\n            scalingAdjustment: 1\n```\n<!--End PulumiCodeChooser -->',
      () =>
        appautoscaling_PolicyStepScalingPolicyConfigurationStepAdjustment_GetTypes(),
      false,
      false,
    ),
  ];
}
