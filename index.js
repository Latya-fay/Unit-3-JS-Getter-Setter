// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius; // Use public property instead of private
  }

  // Getter for diameter
  get diameter() {
    return this.radius * 2;
  }

  // Setter for diameter
  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  // Getter for circumference
  get circumference() {
    return Math.PI * this.diameter;
  }

  // Setter for circumference
  set circumference(circumference) {
    this.radius = circumference / (2 * Math.PI);
  }

  // Getter for area
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  // Setter for area
  set area(area) {
    this.radius = Math.sqrt(area / Math.PI);
  }
}
