import { validateSchema } from "graphql";
import { schema } from "../lib/graphql/schema";

(function generateGraphQLServerTypes() {
  const errors = validateSchema(schema);

  if (errors.length > 0) {
    // eslint-disable-next-line no-console
    console.error(errors);
    process.exit(1);
  }
})();
