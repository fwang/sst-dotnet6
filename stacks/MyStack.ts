import { StackContext, Api } from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": {
        function: {
          runtime: "dotnet6",
          handler: "CsharpFunction::CsharpFunction.Handlers::Handler",
        }
      },
    },
  });

  stack.addOutputs({
    URL: api.url
  });
}
