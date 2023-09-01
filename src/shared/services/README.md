# Service logic

- Services are independant and interact with external world
- network requests, payment API, localstorage API, etc…
- ...

```typescript
	/api - `stores api classes (singletons) for calling network requests (reusable across application)`
```

```typescript
	/paypal - `stores api classes (singletons) for interacting with paypal (reusable across application)`
```

...
