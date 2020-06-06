# Wiki

## View

- handles only declarative errors
- handles routes
- handles data loading
- handles form data
- tends to be small

## STore(model + controllers)

- handles imperative errors in actions and show notification messages by providing them via computed state in notification component lying closer to root component
- uses the only dependencies affecting store property e.g. internationalisation plugin instance(i18n) for notifications.
- actions can return some values to component e.g. new instance id for routing
