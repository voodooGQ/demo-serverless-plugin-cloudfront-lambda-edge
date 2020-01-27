import { CloudFrontRequestHandler } from "aws-lambda";

export const handler: CloudFrontRequestHandler = async event => {
  return {
    status: "307",
    statusDescription: "Temporary Redirect",
    headers: {
      location: [
        {
          key: "location",
          value: "https://google.com",
        },
      ],
    },
  };
};
