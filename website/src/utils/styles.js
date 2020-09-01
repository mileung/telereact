export const apply = cssProperties => {
  const styles = `{
    ${cssProperties}
  }`;
  return {
    after: minWidth => `@media (min-width: ${minWidth}) ${styles}`,
  };
};
