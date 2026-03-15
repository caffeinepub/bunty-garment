import Array "mo:core/Array";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  module Product {
    public type T = {
      id : Nat;
      name : Text;
      description : Text;
      price : Float;
    };

    public func compare(product1 : T, product2 : T) : Order.Order {
      Text.compare(product1.name, product2.name);
    };
  };

  module ProductCategory {
    public type T = {
      id : Nat;
      name : Text;
      description : Text;
    };

    public func compare(category1 : T, category2 : T) : Order.Order {
      Text.compare(category1.name, category2.name);
    };
  };

  type BusinessInfo = {
    name : Text;
    phone : Text;
    address : Text;
  };

  let productCategories = Map.empty<Nat, ProductCategory.T>();
  let products = Map.empty<Nat, Product.T>();

  let businessInfo : BusinessInfo = {
    name = "Bunty Garment";
    phone = "123-456-7890";
    address = "123 Main Street, City, Country";
  };

  var nextProductId = 1;
  var nextCategoryId = 1;

  public shared ({ caller }) func addProductCategory(name : Text, description : Text) : async ProductCategory.T {
    let id = nextCategoryId;
    nextCategoryId += 1;

    let category : ProductCategory.T = {
      id;
      name;
      description;
    };

    productCategories.add(id, category);
    category;
  };

  public shared ({ caller }) func addProduct(name : Text, description : Text, price : Float) : async Product.T {
    let id = nextProductId;
    nextProductId += 1;

    let product : Product.T = {
      id;
      name;
      description;
      price;
    };

    products.add(id, product);
    product;
  };

  public query ({ caller }) func getAllProductCategories() : async [ProductCategory.T] {
    productCategories.values().toArray().sort();
  };

  public query ({ caller }) func getAllProducts() : async [Product.T] {
    products.values().toArray().sort();
  };

  public query ({ caller }) func getBusinessInfo() : async BusinessInfo {
    businessInfo;
  };

  public query ({ caller }) func getProductCategory(id : Nat) : async ProductCategory.T {
    switch (productCategories.get(id)) {
      case (null) { Runtime.trap("Product category does not exist") };
      case (?category) { category };
    };
  };

  public query ({ caller }) func getProduct(id : Nat) : async Product.T {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product does not exist") };
      case (?product) { product };
    };
  };
};
