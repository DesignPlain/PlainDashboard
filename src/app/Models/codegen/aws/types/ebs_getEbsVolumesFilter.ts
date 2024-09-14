import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ebs_getEbsVolumesFilter {
  /*
Set of values that are accepted for the given field.
EBS Volume IDs will be selected if any one of the given values match.
*/
  values?: Array<string>;

  /*
Name of the field to filter by, as defined by
[the underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumes.html).
For example, if matching against the `size` filter, use:

<!--Start PulumiCodeChooser -->
```typescript
import - as pulumi from "@pulumi/pulumi";
import - as aws from "@pulumi/aws";

const tenOrTwentyGbVolumes = aws.ebs.getEbsVolumes({
    filters: [{
        name: "size",
        values: [
            "10",
            "20",
        ],
    }],
});
```
```python
import pulumi
import pulumi_aws as aws

ten_or_twenty_gb_volumes = aws.ebs.get_ebs_volumes(filters=[{
    "name": "size",
    "values": [
        "10",
        "20",
    ],
}])
```
```csharp
using System.Collections.Generic;
using System.Linq;
using Pulumi;
using Aws = Pulumi.Aws;

return await Deployment.RunAsync(() => 
{
    var tenOrTwentyGbVolumes = Aws.Ebs.GetEbsVolumes.Invoke(new()
    {
        Filters = new[]
        {
            new Aws.Ebs.Inputs.GetEbsVolumesFilterInputArgs
            {
                Name = "size",
                Values = new[]
                {
                    "10",
                    "20",
                },
            },
        },
    });

});
```
```go
package main

import (
	"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/ebs"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	pulumi.Run(func(ctx -pulumi.Context) error {
		_, err := ebs.GetEbsVolumes(ctx, &ebs.GetEbsVolumesArgs{
			Filters: []ebs.GetEbsVolumesFilter{
				{
					Name: "size",
					Values: []string{
						"10",
						"20",
					},
				},
			},
		}, nil)
		if err != nil {
			return err
		}
		return nil
	})
}
```
```java
package generated_program;

import com.pulumi.Context;
import com.pulumi.Pulumi;
import com.pulumi.core.Output;
import com.pulumi.aws.ebs.EbsFunctions;
import com.pulumi.aws.ebs.inputs.GetEbsVolumesArgs;
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
        final var tenOrTwentyGbVolumes = EbsFunctions.getEbsVolumes(GetEbsVolumesArgs.builder()
            .filters(GetEbsVolumesFilterArgs.builder()
                .name("size")
                .values(                
                    "10",
                    "20")
                .build())
            .build());

    }
}
```
```yaml
variables:
  tenOrTwentyGbVolumes:
    fn::invoke:
      Function: aws:ebs:getEbsVolumes
      Arguments:
        filters:
          - name: size
            values:
              - '10'
              - '20'
```
<!--End PulumiCodeChooser -->
*/
  name?: string;
}

export function ebs_getEbsVolumesFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Set of values that are accepted for the given field.\nEBS Volume IDs will be selected if any one of the given values match.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      'Name of the field to filter by, as defined by\n[the underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumes.html).\nFor example, if matching against the `size` filter, use:\n\n<!--Start PulumiCodeChooser -->\n```typescript\nimport * as pulumi from "@pulumi/pulumi";\nimport * as aws from "@pulumi/aws";\n\nconst tenOrTwentyGbVolumes = aws.ebs.getEbsVolumes({\n    filters: [{\n        name: "size",\n        values: [\n            "10",\n            "20",\n        ],\n    }],\n});\n```\n```python\nimport pulumi\nimport pulumi_aws as aws\n\nten_or_twenty_gb_volumes = aws.ebs.get_ebs_volumes(filters=[{\n    "name": "size",\n    "values": [\n        "10",\n        "20",\n    ],\n}])\n```\n```csharp\nusing System.Collections.Generic;\nusing System.Linq;\nusing Pulumi;\nusing Aws = Pulumi.Aws;\n\nreturn await Deployment.RunAsync(() => \n{\n    var tenOrTwentyGbVolumes = Aws.Ebs.GetEbsVolumes.Invoke(new()\n    {\n        Filters = new[]\n        {\n            new Aws.Ebs.Inputs.GetEbsVolumesFilterInputArgs\n            {\n                Name = "size",\n                Values = new[]\n                {\n                    "10",\n                    "20",\n                },\n            },\n        },\n    });\n\n});\n```\n```go\npackage main\n\nimport (\n\t"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/ebs"\n\t"github.com/pulumi/pulumi/sdk/v3/go/pulumi"\n)\n\nfunc main() {\n\tpulumi.Run(func(ctx *pulumi.Context) error {\n\t\t_, err := ebs.GetEbsVolumes(ctx, &ebs.GetEbsVolumesArgs{\n\t\t\tFilters: []ebs.GetEbsVolumesFilter{\n\t\t\t\t{\n\t\t\t\t\tName: "size",\n\t\t\t\t\tValues: []string{\n\t\t\t\t\t\t"10",\n\t\t\t\t\t\t"20",\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t},\n\t\t}, nil)\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t\treturn nil\n\t})\n}\n```\n```java\npackage generated_program;\n\nimport com.pulumi.Context;\nimport com.pulumi.Pulumi;\nimport com.pulumi.core.Output;\nimport com.pulumi.aws.ebs.EbsFunctions;\nimport com.pulumi.aws.ebs.inputs.GetEbsVolumesArgs;\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.io.File;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\n\npublic class App {\n    public static void main(String[] args) {\n        Pulumi.run(App::stack);\n    }\n\n    public static void stack(Context ctx) {\n        final var tenOrTwentyGbVolumes = EbsFunctions.getEbsVolumes(GetEbsVolumesArgs.builder()\n            .filters(GetEbsVolumesFilterArgs.builder()\n                .name("size")\n                .values(                \n                    "10",\n                    "20")\n                .build())\n            .build());\n\n    }\n}\n```\n```yaml\nvariables:\n  tenOrTwentyGbVolumes:\n    fn::invoke:\n      Function: aws:ebs:getEbsVolumes\n      Arguments:\n        filters:\n          - name: size\n            values:\n              - \'10\'\n              - \'20\'\n```\n<!--End PulumiCodeChooser -->',
      () => [],
      true,
      false,
    ),
  ];
}
