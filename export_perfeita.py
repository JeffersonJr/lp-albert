
import json

def create_container(id_val, elements, direction="column", is_inner=False, settings=None):
    if settings is None:
        settings = {}
    
    # Root containers (sections) should usually be boxed for standard web layout
    base_settings = {
        "flex_direction": direction,
        "flex_gap": {"unit": "px", "size": 0, "column": "0", "row": "0"},
        "content_width": "boxed" if not is_inner else "full",
        "boxed_width": {"unit": "px", "size": 1140} if not is_inner else {},
        "_flex_align_items": "center" if direction == "column" else "initial",
    }
    
    # Overwrite/Add specific settings
    base_settings.update(settings)
    
    return {
        "id": id_val,
        "elType": "container",
        "isInner": is_inner,
        "settings": base_settings,
        "elements": elements
    }

def create_column(id_val, elements, width_pct="50", direction="column", settings=None):
    if settings is None:
        settings = {}
    
    col_settings = {
        "flex_direction": direction,
        "width": {"unit": "%", "size": str(width_pct)},
        "content_width": "full",
        "_flex_gap": {"unit": "px", "size": 20, "column": "20", "row": "20"},
    }
    col_settings.update(settings)
    
    return create_container(id_val, elements, direction=direction, is_inner=True, settings=col_settings)

def create_heading(id_val, title, size="h2", color="#172126", align="center", weight="800", font_size=32, margin=None):
    settings = {
        "title": title,
        "header_size": size,
        "align": align,
        "title_color": color,
        "typography_typography": "custom",
        "typography_font_family": "Plus Jakarta Sans",
        "typography_font_size": {"unit": "px", "size": font_size},
        "typography_font_weight": str(weight),
        "typography_line_height": {"unit": "em", "size": 1.2}
    }
    if margin:
        settings["margin"] = margin
        
    return {
        "id": id_val,
        "elType": "widget",
        "widgetType": "heading",
        "settings": settings
    }

def create_text(id_val, text, color="#5a6872", align="center", font_size=16):
    return {
        "id": id_val,
        "elType": "widget",
        "widgetType": "text-editor",
        "settings": {
            "editor": text,
            "align": align,
            "text_color": color,
            "typography_typography": "custom",
            "typography_font_family": "Plus Jakarta Sans",
            "typography_font_size": {"unit": "px", "size": font_size}
        }
    }

def create_button(id_val, text, bg_color="#1E6751", text_color="#FFFFFF", align="center"):
    return {
        "id": id_val,
        "elType": "widget",
        "widgetType": "button",
        "settings": {
            "text": text,
            "align": align,
            "background_color": bg_color,
            "button_text_color": text_color,
            "typography_typography": "custom",
            "typography_font_family": "Plus Jakarta Sans",
            "typography_font_weight": "600",
            "padding": {"unit": "px", "top": "16", "right": "32", "bottom": "16", "left": "32", "isLinked": False},
            "border_radius": {"unit": "px", "top": "12", "right": "12", "bottom": "12", "left": "12", "isLinked": True}
        }
    }

def create_form(id_val, form_name="Lead Form"):
    return {
        "id": id_val,
        "elType": "widget",
        "widgetType": "form",
        "settings": {
            "form_name": form_name,
            "form_fields": [
                {
                    "field_type": "text",
                    "field_label": "Nome",
                    "placeholder": "Seu nome completo",
                    "required": "yes",
                    "_id": "name"
                },
                {
                    "field_type": "email",
                    "field_label": "E-mail",
                    "placeholder": "Seu melhor e-mail",
                    "required": "yes",
                    "_id": "email"
                },
                {
                    "field_type": "tel",
                    "field_label": "Whatsapp",
                    "placeholder": "(00) 00000-0000",
                    "required": "yes",
                    "_id": "whatsapp"
                },
                {
                    "field_type": "select",
                    "field_label": "Cargo",
                    "field_options": "Dono de imobiliária\nCorretor autônomo",
                    "required": "yes",
                    "_id": "cargo"
                },
                {
                    "field_type": "select",
                    "field_label": "Qual valor disponível para investir no projeto?",
                    "field_options": "Até R$ 300,00\nAté R$ 800,00\nA partir de R$ 1.000",
                    "required": "yes",
                    "_id": "investimento"
                }
            ],
            "submit_button_text": "Quero o Albert atendendo meus leads",
            "submit_button_background_color": "#1E6751",
            "submit_button_text_color": "#FFFFFF",
            "submit_button_border_radius": {"unit": "px", "size": 12},
            "submit_button_typography_typography": "custom",
            "submit_button_typography_font_family": "Plus Jakarta Sans",
            "submit_button_typography_font_weight": "700",
            "submit_button_padding": {"unit": "px", "top": "16", "right": "32", "bottom": "16", "left": "32", "isLinked": False}
        }
    }

def card_settings(bg="#FFFFFF", radius=20, padding=40, shadow=True):
    s = {
        "background_background": "classic",
        "background_color": bg,
        "border_radius": {"unit": "px", "top": str(radius), "right": str(radius), "bottom": str(radius), "left": str(radius), "isLinked": True},
        "padding": {"unit": "px", "top": str(padding), "right": str(padding), "bottom": str(padding), "left": str(padding), "isLinked": True},
    }
    if shadow:
        s["box_shadow_box_shadow_type"] = "yes"
        s["box_shadow_box_shadow"] = {"horizontal": 0, "vertical": 10, "blur": 40, "spread": 0, "color": "rgba(0,0,0,0.05)"}
    return s

# --- Sections ---

# 1. Hero
hero = create_container("hero-section", [
    create_heading("hero-badge", "Usado por +500 imobiliárias no Brasil", "div", "#1E6751", weight="600", font_size=14, margin={"bottom": "16"}),
    create_heading("hero-title", "Você está perdendo <span style='color: #1E6751;'>60% dos leads</span> por demora no atendimento", "h1", "#172126", weight="800", font_size=56),
    create_text("hero-desc", "O Albert responde seus leads em <strong>3 segundos</strong>, qualifica automaticamente e agenda visitas — mesmo de madrugada, domingo ou feriado.", font_size=18),
    create_container("hero-form-box", [
        create_form("hero-lead-form", "Hero Lead Form")
    ], is_inner=True, settings={"width": {"unit": "%", "size": "100"}, "max_width": {"unit": "px", "size": 600}, "margin": {"top": "40"}})
], settings={
    "background_background": "classic",
    "background_color": "#F8FBF9",
    "padding": {"unit": "px", "top": "120", "bottom": "100", "left": "0", "right": "0", "isLinked": False},
    "flex_gap": {"unit": "px", "size": 32, "column": "32", "row": "32"},
    "_flex_align_items": "center"
})

# 2. Social Proof
social_proof = create_container("social-proof", [
    create_text("sp-label", "INTEGRAMOS COM OS MAIORES PORTAIS DO BRASIL", "#8c959b", font_size=12),
    create_text("sp-icons", "ZAP • Viva Real • Chaves na Mão • Lopes • Quinto Andar • Net Imóveis", "#8c959b", font_size=20)
], settings={
    "padding": {"unit": "px", "top": "60", "bottom": "60", "isLinked": False},
    "border_style": "solid",
    "border_width": {"unit": "px", "top": "0", "right": "0", "bottom": "1", "left": "0", "isLinked": False},
    "border_color": "#e2e8f0",
    "flex_gap": {"unit": "px", "size": 20, "column": "20", "row": "20"}
})

# 3. Pain/Solution
ps_grid = create_container("ps-row", [
    create_column("ps-pain", [
        create_heading("ps-pain-title", "Sem o Albert", "h3", "#EF4444", font_size=24),
        create_text("ps-pain-list", "<ul style='list-style: none; padding: 0;'><li>❌ Lead chega às 22h e só responde amanhã</li><li>❌ Corretores perdendo tempo com leads frios</li><li>❌ Concorrente responde primeiro</li></ul>", align="left")
    ], width_pct="48", settings=card_settings(bg="#FFF1F1", radius=24, shadow=False)),
    create_column("ps-sol", [
        create_heading("ps-sol-title", "Com o Albert", "h3", "#1E6751", font_size=24),
        create_text("ps-sol-list", "<ul style='list-style: none; padding: 0;'><li>✅ Resposta em 3 segundos</li><li>✅ Leads chegam qualificados</li><li>✅ Custo fixo previsível</li></ul>", align="left")
    ], width_pct="48", settings=card_settings(bg="#E6FFFA", radius=24, shadow=False))
], direction="row", is_inner=True, settings={"flex_justify_content": "space-between", "flex_gap": {"unit": "px", "size": 24, "column": "24", "row": "24"}})

pain_solution = create_container("pain-solution-section", [
    create_heading("ps-section-title", "O problema que custa caro e ninguém fala", font_size=40),
    create_text("ps-section-desc", "A cada minuto que um lead espera, sua chance de conversão cai 80%.", font_size=18),
    ps_grid
], settings={
    "padding": {"unit": "px", "top": "100", "bottom": "100", "isLinked": False},
    "flex_gap": {"unit": "px", "size": 48, "column": "48", "row": "48"}
})

# 4. How It Works
hiw_inner = create_container("hiw-grid", [
    create_column(f"step-{i}", [
        create_heading(f"step-num-{i}", f"0{i}", "div", "#1E6751", font_size=48, weight="900"),
        create_heading(f"step-title-{i}", title, "h3", font_size=20, weight="700"),
        create_text(f"step-desc-{i}", desc, font_size=15)
    ], width_pct="23", settings=card_settings(padding=30))
    for i, (title, desc) in enumerate([
        ("Lead entra em contato", "WhatsApp, site ou portal."),
        ("Qualificação automática", "Entende busca, orçamento e urgência."),
        ("Visita agendada", "Na agenda do corretor disponível."),
        ("Venda fechada", "Lead quente, contexto completo.")
    ], 1)
], direction="row", is_inner=True, settings={"flex_justify_content": "space-between", "flex_gap": {"unit": "px", "size": 20, "column": "20", "row": "20"}})

how_it_works = create_container("how-it-works-section", [
    create_heading("hiw-badge", "Simples de implementar", "div", "#1E6751", weight="600", font_size=14),
    create_heading("hiw-title", "Do lead à venda em 4 passos", font_size=40),
    hiw_inner
], settings={
    "background_background": "classic",
    "background_color": "#F8FBF9",
    "padding": {"unit": "px", "top": "100", "bottom": "100", "isLinked": False},
    "flex_gap": {"unit": "px", "size": 48, "column": "48", "row": "48"}
})

# 5. Metrics
metrics_inner = create_container("m-row", [
    create_column(f"m-{i}", [
        create_heading(f"mv-{i}", val, "div", "#FFFFFF", font_size=52, weight="900"),
        create_heading(f"ml-{i}", label, "div", "#D1FAE5", font_size=16, weight="600")
    ], width_pct="25") for i, (val, label) in enumerate([("< 60s", "1º Atendimento"), ("90%", "Aproveitamento"), ("100%", "Follow-up"), ("100%", "Qualificação")])
], direction="row", is_inner=True, settings={"flex_justify_content": "space-around"})

metrics = create_container("metrics-section", [
    create_heading("m-title", "Pare de queimar dinheiro", "h2", "#FFFFFF", font_size=40),
    metrics_inner
], settings={
    "background_background": "classic",
    "background_color": "#1E6751",
    "padding": {"unit": "px", "top": "100", "bottom": "100", "isLinked": False},
    "flex_gap": {"unit": "px", "size": 40, "column": "40", "row": "40"}
})

# 6. Testimonials
testimonials_inner = create_container("t-row", [
    create_column(f"t-{i}", [
        create_heading(f"tm-{i}", metric, "div", "#1E6751", font_size=16, weight="700"),
        create_text(f"tq-{i}", f'"{quote}"', font_size=16),
        create_container(f"ta-{i}", [
            create_heading(f"tn-{i}", name, "div", font_size=16, weight="700", align="center"),
            create_text(f"tr-{i}", role, font_size=14)
        ], is_inner=True, settings={"flex_gap": {"unit": "px", "size": 4, "column": "4", "row": "4"}})
    ], width_pct="31", settings=card_settings())
    for i, (quote, name, role, metric) in enumerate([
        ("Antes do Albert, perdíamos leads. Hoje, 100% são atendidos.", "Ricardo Silva", "Diretor Comercial", "+320% leads qualificados"),
        ("O agendamento foi um divisor de águas. Triplicamos as visitas.", "Mariana Costa", "CEO Elite Properties", "3x mais visitas"),
        ("Implementamos em um dia. ROI de 12x em 60 dias.", "João Pedro", "Gerente MyHouse", "ROI 12x")
    ])
], direction="row", is_inner=True, settings={"flex_justify_content": "space-between"})

testimonials = create_container("testimonials-section", [
    create_heading("t-badge", "Resultados Reais", "div", "#1E6751", font_size=14),
    create_heading("t-title", "Quem usa, não volta atrás", font_size=40),
    testimonials_inner
], settings={
    "background_background": "classic",
    "background_color": "#F8FBF9",
    "padding": {"unit": "px", "top": "100", "bottom": "100", "isLinked": False},
    "flex_gap": {"unit": "px", "size": 48, "column": "48", "row": "48"}
})

# 7. Pricing
pricing_inner = create_container("p-row", [
   create_column(f"plan-{name}", [
       create_heading(f"pn-{name}", name, "div", font_size=40, weight="900"),
       create_text(f"pa-{name}", atend, font_size=16),
       create_button(f"pb-{name}", "Falar com consultor")
   ], width_pct="23", settings=card_settings(radius=24, padding=40))
   for name, atend in [("500", "500 atendimentos/mês"), ("1000", "1.000 atendimentos/mês"), ("1500", "1.500 atendimentos/mês"), ("2000", "2.000 atendimentos/mês")]
], direction="row", is_inner=True, settings={"flex_justify_content": "space-between", "flex_gap": {"unit": "px", "size": 20, "column": "20", "row": "20"}})

pricing = create_container("pricing-section", [
    create_heading("p-badge", "Investimento", "div", "#1E6751", font_size=14),
    create_heading("p-title", "Escolha o plano ideal", font_size=40),
    pricing_inner
], settings={
    "padding": {"unit": "px", "top": "100", "bottom": "100", "isLinked": False},
    "flex_gap": {"unit": "px", "size": 48, "column": "48", "row": "48"}
})

# 8. FAQ
faq = create_container("faq-section", [
  create_heading("f-title", "Perguntas Frequentes", font_size=40),
  {
      "id": "faq-acc",
      "elType": "widget",
      "widgetType": "accordion",
      "settings": {
          "tabs": [
              {"tab_title": "Preciso de conhecimento técnico?", "tab_content": "Não. Nossa equipe cuida de toda a implementação."},
              {"tab_title": "Substitui meus corretores?", "tab_content": "Não. O Albert faz o trabalho de SDR."},
              {"tab_title": "Funciona com meu CRM?", "tab_content": "Sim. Integramos com os principais CRMs."}
          ],
          "title_color": "#172126",
          "active_title_color": "#1E6751",
          "typography_typography": "custom",
          "typography_font_family": "Plus Jakarta Sans",
          "typography_font_weight": "700"
      }
  }
], settings={
    "background_background": "classic",
    "background_color": "#F8FBF9",
    "padding": {"unit": "px", "top": "100", "bottom": "100", "isLinked": False},
    "flex_gap": {"unit": "px", "size": 40, "column": "40", "row": "40"}
})

# 9. Final CTA
final_cta = create_container("final-cta-section", [
    create_heading("fcta-title", "Cada minuto sem o Albert é um lead perdido", "h2", "#FFFFFF", font_size=48),
    create_text("fcta-desc", "Comece agora. Em 24 horas seu atendimento estará automático.", "#D1FAE5", font_size=20),
    create_container("fcta-form-box", [
        create_form("fcta-lead-form", "Final CTA Form")
    ], is_inner=True, settings={"width": {"unit": "%", "size": "100"}, "max_width": {"unit": "px", "size": 600}, "margin": {"top": "40"}})
], settings={
    "background_background": "classic",
    "background_color": "#1E6751",
    "padding": {"unit": "px", "top": "120", "bottom": "120", "isLinked": False},
    "flex_gap": {"unit": "px", "size": 40, "column": "40", "row": "40"},
    "border_radius": {"unit": "px", "top": "40", "right": "40", "bottom": "40", "left": "40", "isLinked": True},
    "margin": {"unit": "px", "top": "40", "right": "20", "bottom": "40", "left": "20", "isLinked": False},
    "_flex_align_items": "center"
})

data = {
    "content": [hero, social_proof, pain_solution, how_it_works, metrics, testimonials, pricing, faq, final_cta],
    "page_settings": {
        "entrance_animation": "fadeInUp",
        "container_width": {"unit": "px", "size": 1140}
    },
    "version": "0.4",
    "title": "Albert LP Perfect Final",
    "type": "page"
}

output_path = "lp-perfeita-elementor.json"
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"JSON gerado com sucesso em {output_path}")
