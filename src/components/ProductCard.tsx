import { Badge } from "@/components/ui/badge";
import MagneticButton from "@/components/MagneticButton";

interface ProductCardProps {
  product: {
    category: string;
    name: string;
    description: string;
    material: string;
    sizes: string;
    standards: string;
    image: string;
  };
  index?: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <div 
      className="product-card product-card-hoverable w-full bg-card border border-border rounded-lg shadow-lg"
      data-card-index={index}
    >
      {/* Image Section - Full height initially, reduces on hover */}
      <div className="product-card-image relative w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/30"></div>
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground z-10">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Badge>
      </div>

      {/* Details Section - Slides up from bottom on hover */}
      <div className="product-card-details p-4 flex flex-col gap-2">
        <h3 className="font-heading font-bold text-lg text-foreground text-center">{product.name}</h3>
        <p className="text-muted-foreground text-xs text-center leading-relaxed line-clamp-2">{product.description}</p>
        
        <div className="space-y-1.5 text-xs mt-1">
          <div className="flex justify-between gap-2 items-start">
            <span className="text-muted-foreground whitespace-nowrap">Material:</span>
            <span className="font-medium text-foreground text-right flex-1 break-words whitespace-normal">{product.material}</span>
          </div>
          <div className="flex justify-between gap-2 items-start">
            <span className="text-muted-foreground whitespace-nowrap">Sizes:</span>
            <span className="font-medium text-foreground text-right flex-1 break-words whitespace-normal">{product.sizes}</span>
          </div>
          <div className="flex justify-between gap-2 items-start">
            <span className="text-muted-foreground whitespace-nowrap">Standards:</span>
            <span className="font-medium text-foreground text-right flex-1 break-words whitespace-normal">{product.standards}</span>
          </div>
        </div>
        
        <MagneticButton variant="outline" className="w-full text-xs h-8 mt-2">
          Request Quote
        </MagneticButton>
      </div>
    </div>
  );
};

export default ProductCard;
