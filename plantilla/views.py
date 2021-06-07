from django.shortcuts import render, redirect

def index(request):
    return render(request, 'index.html', {
        # context
        'title': 'Condominios',
        'cards' : [
            {'image':'https://mdbootstrap.com/img/new/standard/city/044.jpg','title':'Card title', 'text': 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. '},
            {'image':'https://mdbootstrap.com/img/new/standard/city/044.jpg','title':'Card title', 'text': 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. '},
            {'image':'https://mdbootstrap.com/img/new/standard/city/044.jpg','title':'Card title', 'text': 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. '},
            {'image':'https://mdbootstrap.com/img/new/standard/city/044.jpg','title':'Card title', 'text': 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. '}
        ]
    })
    
def mantenimiento(request):
    return render(request, 'mantenimiento.html', {
        'title': 'Mantenenimiento',
        'message': 'Listado de productos',
        'oficios' : [
            {'title':'Carpintería', 'subtitle': 'Limpieza'},
            {'title':'Reparaciones', 'subtitle':  'Baños'},
            {'title':'Cocina', 'subtitle': 'Control de plagas'},
            {'title':'Electricidad', 'subtitle': 'Ver todo'},
        ]
    })