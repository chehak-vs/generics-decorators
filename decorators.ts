// Example parameter decorator
const ParameterDecoratorExample: ParameterDecorator = (target, propertyKey, parameterIndex) => {
    console.log(`Parameter Decorator applied to parameter ${parameterIndex} of ${String(propertyKey)}`);
  };
  
  // Example property decorator
  const PropertyDecoratorExample: PropertyDecorator = (target, propertyKey) => {
    console.log(`Property Decorator applied to: ${String(propertyKey)}`);
  };
  
  // Example method decorator
  const MethodDecoratorExample: MethodDecorator = (target, propertyKey, descriptor) => {
    console.log(`Method Decorator applied to: ${String(propertyKey)}`);
    return descriptor;
  };
  
  // Example class decorator
  const ClassDecoratorExample: ClassDecorator = (target) => {
    console.log(`Class Decorator applied to: ${target.name}`);
  };
  
  @ClassDecoratorExample
  class ExampleClass {
    @PropertyDecoratorExample
    private exampleProperty: string = "Hello, World!";
  
    @MethodDecoratorExample
    exampleMethod(@ParameterDecoratorExample parameter: string): void {
      console.log(`${this.exampleProperty} ${parameter}`);
    }
  }
  
  const instance = new ExampleClass();
  instance.exampleMethod("TypeScript");
  