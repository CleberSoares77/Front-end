import flet as ft

def main(pg: ft.Page):
    pg.title = "Olá, Usuário!"
    pg.vertical_alignment = ft.MainAxisAlignment.CENTER
    btn = ft.ElevatedButton("Clique aqui, zé!")
    pg.add(btn)

ft.app(target=main, view=ft.WEB_BROWSER)