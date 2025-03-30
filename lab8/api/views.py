from django.shortcuts import render, get_object_or_404
from api.models import Product, Category
from django.http import HttpRequest, HttpResponse, JsonResponse

# Create your views here.
def test_json(request):
    data = {
        "name": "Zhuldyz",
        "lastname": "Erniyazova",
        "gpa": 3.0
    }
    return JsonResponse(data)

def products_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def product_item(request, id):
    product = get_object_or_404(Product, id=id)
    return JsonResponse(product.to_json())

def categories_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def category_item(request, id):
    category = get_object_or_404(Category, id=id)
    return JsonResponse(category.to_json())


def category_products(request, id):
    category = get_object_or_404(Category, id=id)
    products = Product.objects.filter(category=category)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)