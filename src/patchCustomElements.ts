if (typeof customElements !== "undefined") {
  const _define = customElements.define.bind(customElements);
  customElements.define = (name, ctor, opts) => {
    if (!customElements.get(name)) _define(name, ctor, opts);
  };
}

export {};
