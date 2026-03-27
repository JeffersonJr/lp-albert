
import json

def create_container(id_val, elements, settings=None):
    if settings is None:
        settings = {}
    return {
        "id": id_val,
        "elType": "container",
        "settings": {
            "flex_direction": "column",
            "content_width": "full",
            "justify_content": "center",
            "align_items": "center",
            **settings
        },
        "elements": elements
    }

def create_heading(id_val, title, size="h2", color="#172126", align="center", weight="800", font_size=32):
    return {
        "id": id_val,
        "elType": "widget",
        "widgetType": "heading",
        "settings": {
            "title": title,
            "header_size": size,
            "align": align,
            "title_color": color,
            "typography_typography": "custom",
            "typography_font_family": "Plus Jakarta Sans",
            "typography_font_size": {"unit": "px", "size": font_size},
            "typography_font_weight": weight
        }
    }

def create_text(id_val, text, color="#5a6872", align="center"):
    return {
        "id": id_val,
        "elType": "widget",
        "widgetType": "text-editor",
        "settings": {
            "editor": text,
            "align": align,
            "text_color": color,
            "typography_typography": "custom",
            "typography_font_family": "Plus Jakarta Sans"
        }
    }

def create_button(id_val, text, bg_color="#1E6751", text_color="#FFFFFF"):
    return {
        "id": id_val,
        "elType": "widget",
        "widgetType": "button",
        "settings": {
            "text": text,
            "align": "center",
            "background_color": bg_color,
            "button_text_color": text_color,
            "typography_typography": "custom",
            "typography_font_family": "Plus Jakarta Sans",
            "border_radius": {"unit": "px", "top": "12", "right": "12", "bottom": "12", "left": "12", "isLinked": True}
        }
    }

def create_inner_container(id_val, elements, direction="row", bg_color=None, padding=None):
    settings = {"flex_direction": direction}
    if bg_color: settings["background_color"] = bg_color
    if padding: settings["padding"] = {"unit": "px", "top": padding, "bottom": padding, "left": padding, "right": padding, "isLinked": True}
    return {
        "id": id_val,
        "elType": "container",
        "isInner": True,
        "settings": settings,
        "elements": elements
    }

# Sections
hero = create_container("hero-section", [
    create_heading("hero-badge", "Usado por +500 imobiliárias no Brasil", "div", "#1E6751", weight="600", font_size=14),
    create_heading("hero-title", "Você está perdendo <span style='color: #1E6751;'>60% dos leads</span> por demora no atendimento", "h1", "#172126", weight="800", font_size=54),
    create_text("hero-desc", "O Albert responde seus leads em <strong>3 segundos</strong>, qualifica automaticamente e agenda visitas — mesmo de madrugada, domingo ou feriado."),
    create_button("hero-cta", "Falar com especialista")
], {"padding": {"unit": "px", "top": "112", "bottom": "80", "isLinked": False}})

social_proof = create_container("social-proof", [
    create_text("sp-label", "INTEGRAMOS COM OS MAIORES PORTAIS DO BRASIL", "#8c959b"),
    # Simplified icons representation
    create_text("sp-icons", "ZAP | Viva Real | Chaves na Mão | Lopes | Quinto Andar | Net Imóveis", "#8c959b")
], {"padding": {"unit": "px", "top": "40", "bottom": "40", "isLinked": False}, "border_style": "solid", "border_width": {"bottom": "1"}, "border_color": "#e2e8f0"})

pain_solution = create_container("pain-solution", [
    create_heading("ps-title", "O problema que custa caro e ninguém fala"),
    create_text("ps-desc", "A cada minuto que um lead espera, sua chance de conversão cai 80%."),
    create_inner_container("ps-grid", [
        create_container("ps-pain", [
            create_heading("ps-pain-title", "Sem o Albert", "h3", "#EF4444", font_size=22),
            create_text("ps-pain-list", "<ul><li>Lead chega às 22h e só responde amanhã</li><li>Corretores perdendo tempo com leads frios</li><li>Concorrente responde primeiro</li></ul>")
        ], {"background_color": "#FEE2E2", "padding": "30", "border_radius": {"unit": "px", "size": 16}}),
        create_container("ps-sol", [
            create_heading("ps-sol-title", "Com o Albert", "h3", "#1E6751", font_size=22),
            create_text("ps-sol-list", "<ul><li>Resposta em 3 segundos</li><li>Leads chegam qualificados</li><li>Custo fixo previsível</li></ul>")
        ], {"background_color": "#D1FAE5", "padding": "30", "border_radius": {"unit": "px", "size": 16}, "border_color": "#1E6751", "border_width": "2", "border_style": "solid"})
    ])
], {"background_color": "#F8FBF9", "padding": "80"})

how_it_works = create_container("how-it-works", [
    create_heading("hiw-badge", "Simples de implementar", "div", "#1E6751", weight="600", font_size=14),
    create_heading("hiw-title", "Do lead à venda em 4 passos"),
    create_inner_container("hiw-steps", [
        create_container(f"step-{i}", [
            create_heading(f"step-num-{i}", f"0{i}", "div", "#1E6751", font_size=40, weight="800"),
            create_heading(f"step-title-{i}", title, "h3", font_size=18),
            create_text(f"step-desc-{i}", desc)
        ], {"background_color": "#FFFFFF", "padding": "20", "border_radius": {"unit": "px", "size": 12}}) for i, (title, desc) in enumerate([
            ("Lead entra em contato", "WhatsApp, site ou portal."),
            ("Qualificação automática", "Entende busca, orçamento e urgência."),
            ("Visita agendada", "Na agenda do corretor disponível."),
            ("Venda fechada", "Lead quente, contexto completo.")
        ], 1)
    ])
], {"padding": "80"})

metrics = create_container("metrics", [
    create_heading("m-title", "Pare de queimar dinheiro", "h2", "#FFFFFF"),
    create_inner_container("m-grid", [
        create_container(f"m-{i}", [
            create_heading(f"mv-{i}", val, "div", "#FFFFFF", font_size=44),
            create_heading(f"ml-{i}", label, "div", "#FFFFFF", font_size=16)
        ]) for i, (val, label) in enumerate([("< 60s", "1º Atendimento"), ("90%", "Aproveitamento"), ("100%", "Follow-up"), ("100%", "Qualificação")])
    ])
], {"background_color": "#1E6751", "padding": "80"})

testimonials = create_container("testimonials", [
    create_heading("t-badge", "Resultados Reais", "div", "#1E6751", font_size=14),
    create_heading("t-title", "Quem usa, não volta atrás"),
    create_inner_container("t-list", [
        create_container(f"t-{i}", [
            create_heading(f"tm-{i}", metric, "div", "#1E6751", font_size=16),
            create_text(f"tq-{i}", f'"{quote}"'),
            create_heading(f"tn-{i}", name, "div", font_size=16),
            create_text(f"tr-{i}", role)
        ], {"background_color": "#FFFFFF", "padding": "24", "border_radius": {"unit": "px", "size": 16}}) for i, (quote, name, role, metric) in enumerate([
            ("Antes do Albert, perdíamos leads. Hoje, 100% são atendidos.", "Ricardo Silva", "Diretor Comercial", "+320% leads qualificados"),
            ("O agendamento foi um divisor de águas. Triplicamos as visitas.", "Mariana Costa", "CEO Elite Properties", "3x mais visitas"),
            ("Implementamos em um dia. ROI de 12x em 60 dias.", "João Pedro", "Gerente MyHouse", "ROI 12x")
        ])
    ])
], {"background_color": "#F8FBF9", "padding": "80"})

pricing = create_container("pricing", [
    create_heading("p-badge", "Investimento", "div", "#1E6751", font_size=14),
    create_heading("p-title", "Escolha o plano ideal"),
    create_inner_container("p-cards", [
       create_container(name, [
           create_heading(f"pn-{name}", name, "div", font_size=32),
           create_text(f"pa-{name}", atend),
           create_button(f"pb-{name}", "Falar com consultor")
       ], {"background_color": "#FFFFFF", "padding": "24", "border_radius": {"unit": "px", "size": 16}, "border_color": "#e2e8f0", "border_style": "solid", "border_width": "1"}) for name, atend in [("500", "500 atendimentos/mês"), ("1000", "1.000 atendimentos/mês"), ("1500", "1.500 atendimentos/mês"), ("2000", "2.000 atendimentos/mês")]
    ])
], {"padding": "80"})

faq = create_container("faq", [
  create_heading("f-title", "Perguntas Frequentes"),
  {
      "id": "faq-acc",
      "elType": "widget",
      "widgetType": "accordion",
      "settings": {
          "tabs": [
              {"tab_title": "Preciso de conhecimento técnico?", "tab_content": "Não. Nossa equipe cuida de toda a implementação."},
              {"tab_title": "Substitui meus corretores?", "tab_content": "Não. O Albert faz o trabalho de SDR."},
              {"tab_title": "Funciona com meu CRM?", "tab_content": "Sim. Integramos com os principais CRMs."}
          ]
      }
  }
], {"background_color": "#F8FBF9", "padding": "80"})

final_cta = create_container("final-cta", [
    create_heading("fcta-title", "Cada minuto sem o Albert é um lead perdido", "h2", "#FFFFFF"),
    create_text("fcta-desc", "Comece agora. Em 24 horas seu atendimento estará automático.", "#FFFFFF"),
    create_button("fcta-btn", "Falar com especialista", "#FFFFFF", "#1E6751")
], {"background_color": "#1E6751", "padding": "100"})

content = [hero, social_proof, pain_solution, how_it_works, metrics, testimonials, pricing, faq, final_cta]

data = {
    "content": content,
    "page_settings": {"entrance_animation": "fadeInUp"},
    "version": "0.4",
    "title": "Albert LP Completa",
    "type": "page"
}

output_path = "lp-completa-elementor.json"
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"JSON gerado com sucesso em {output_path}")
