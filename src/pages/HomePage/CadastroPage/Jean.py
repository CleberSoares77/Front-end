import flet as ft
def validade_requided_text_field(e):
    if e.control.value=="" or len(e.control.value) > 3:
        e.control.error_text = "Preenchimento obrigatório!"
        e.control.updte()
def create_from(pg):
    vetor= [
        ft.Radio(value="F", label="Feminino"),
        ft.Radio(value="M", label="Masculino")
    ]
      
    sex = ft.RadioGroup(
        content=ft.Row(vetor)
    )
    return ft.SafeArea(
        ft.Column(
            scroll=ft.ScrollMode.AUTO,
            controls=[
                ft.TextField(
                    label="Nome",
                    keyboard_type=ft.KeyboardType.NAME,
                    on_blur=validade_requided_text_field,
                ),
                sex
            ]
        ),
        expand=True,
    )
def main(page: ft.Page):
    page.title="Hello Flet!"
    page.add(create_from(main))
if __name__== "__main__":
        ft.app(target=main, view=ft.WEB_BROWSER, port=8000)