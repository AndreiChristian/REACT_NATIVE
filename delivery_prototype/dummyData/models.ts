export interface MenuCategory {
  id: number,
  name: string,
  imagePath: string
}

export interface MenuItem {
  id: number,
  categoryId: number,
  name: string,
  description: string,
  price: number
}

export interface CartItem {
  item: MenuItem,
  quantity: number,
  mentions: string
}
