import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function OrderTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="ID do pedido" className="h-8 w-auto" />
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
      <Select>
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue defaultValue="all" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem valeu="all">Todos status</SelectItem>
          <SelectItem valeu="pending">Pendente</SelectItem>
          <SelectItem valeu="cancel">Cancelado</SelectItem>
          <SelectItem valeu="processing">Em preparo</SelectItem>
          <SelectItem valeu="delivering">Em entrega</SelectItem>
          <SelectItem valeu="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" variant="secondary">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button type="button" variant="outline">
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  );
}
