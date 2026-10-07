# Модель даних мережі магазинів іграшок

## 1 Контекст
Система призначена для обліку номенклатури іграшок.

## 2 Сутності та атрибути
* **Category (Категорія):**
  * `category_id` (string) - id категорії
  * `name` (string) - назва категорії
* **Product (Товар):**
  * `product_id` (string) - id товару
  * `category_id` (string, FK) - id категорії
  * `name` (string) - назва іграшки
  * `brand` (string) - торгова марка/виробник
  * `sku` (string, unique) - внутрішній артикул мережі
  * `barcode` (string, unique) - штрихкод
  * `min_age` (int) - мінімальний вік
  * `price` (decimal) - ціна
  * `description` (string) - опис характеристик
* **Location (Локація):**
  * `location_id` (string) - id точки
  * `name` (string) - назва магазину чи складу
  * `type` (string) - тип об'єкта ("store" | "warehouse")
  * `address` (string) - фізична адреса
  * `status` (string) - стан точки ("working" | "closed" | "destroyed")
* **Stock (Запас на локації):**
  * `stock_id` (string) - id запису запасів
  * `product_id` (string, FK) - id товару
  * `location_id` (string, FK) - id точки
  * `quantity` (int) - поточний залишок товару
* **Supplier (Постачальник):**
  * `supplier_id` (string) - id постачальника
  * `name` (string) - назва компанії постачальника
  * `phone` (string) - номер телефону
  * `email` (string) - електронна пошта
  * `description` (string) - коментарі та умови співпраці
* **SupplyOrder (Документ постачання):**
  * `supply_order_id` (string) - id постачання
  * `supplier_id` (string, FK) - id постачальника
  * `location_id` (string, FK) - id точки призначення
  * `user_id` (string, FK) - id відповідального співробітника
  * `date` (timestamp) - дата та час створення
  * `status` (string) - статус виконання постачання
* **SupplyOrderItem (Позиція поставки):**
  * `supply_order_item_id` (string) - id позиції
  * `supply_order_id` (string, FK) - id постачання
  * `product_id` (string, FK) - id товару
  * `quantity` (int) - кількість поставленого товару
  * `purchase_price` (decimal) - закупівельна ціна одиниці товару
* **User (Співробітник):**
  * `user_id` (string) - id облікового запису
  * `location_id` (string, FK) - id закріпленої точки (опціонально)
  * `name` (string) - повне ім'я співробітника
  * `role` (string) - роль ("admin" | "cashier" | "warehouse_worker" | "store_manager")
  * `phone` (string) - телефон
  * `email` (string) - пошта
  * `state` (string) - статус ("working" | "not_working" | "dismissed")

## 3 Зв'язки та кардинальності  
* **Category }o--o{ Product:** категорія може містити нуль або багато товарів, а товар може належати до 0 або багатьох категорій
* **Product ||--o{ Stock }o--|| Location:** товар і локація зв'язані через асоціативну сутність Stock (товар може бути на багатьох точках; точка може містити багато товарів)
* **Product }o--o{ Supplier:** прямий зв'язок Many-to-Many
* **Supplier ||--o{ SupplyOrder:** може бути багато постачань від одного постачальника; 
кожне постачання надходить строго від одного постачальника
* **Location ||--o{ SupplyOrder:** замовлення доставляється на конкретну локацію; 
локація може приймати багато постачань
* **User ||--o{ SupplyOrder:** співробітник відповідає за прийом постачань; 
за кожним постачанням закріплений один відповідальний
* **Location ||--o{ User:** локація має багато закріплених співробітників; 
для працівника прив'язка до точки є опціональною
* **SupplyOrder ||--|{ SupplyOrderItem:** накладна постачання обов'язково містить від 1 до N товарних позицій
* **Product ||--o{ SupplyOrderItem:** конкретний товар може фігурувати в позиціях багатьох постачань; 
кожен рядок постачання посилається на одну позицію

## 4 Критерії прийняття
1. Модель не містить специфічних конструкцій СУБД (VARCHAR, CHECK, ENUM); 
типи даних зведено до концептуальних: `string`, `int`, `decimal`, `timestamp`
2. Первинні ключі всіх сутностей `string` (UUID)