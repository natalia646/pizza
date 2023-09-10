declare module "*.svg" {
    const value: any;
    export default value;
  }

  declare module "*.png" {
    const value: any;
    export default value;
  }

  declare module "*.jpg" {
    const value: any;
    export default value;
  }

  declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
