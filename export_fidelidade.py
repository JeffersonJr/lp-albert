
import json

def create_container(id_val, elements, direction="column", is_inner=False, settings=None):
    if settings is None:
        settings = {}
    
    base_settings = {
        "flex_direction": direction,
        "flex_gap": {"unit": "px", "size": 0, "column": "0", "row": "0"},
        "content_width": "full"
    }
    
    # Overwrite with provided settings
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
        "content_width": "full"
    }
    col_settings.update(settings)
    
    return create_container(id_val, elements, direction=direction, is_inner=True, settings=col_settings)

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
            "border_radius": {"unit": "px", "top": "12", "right": "12", "bottom": "12", "left": "12", "isLinked": True}
        }
    }

# Sections
# 1. Hero
hero = create_container("hero-section", [
    create_heading("hero-badge", "Usado por +500 imobiliárias no Brasil", "div", "#1E6751", weight="600", font_size=14),
    create_heading("hero-title", "Você está perdendo <span style='color: #1E6751;'>60% dos leads</span> por demora no atendimento", "h1", "#172126", weight="800", font_size=54),
    create_text("hero-desc", "O Albert responde seus leads em <strong>3 segundos</strong>, qualifica automaticamente e agenda visitas — mesmo de madrugada, domingo ou feriado."),
    create_button("hero-cta", "Falar com especialista")
], settings={
    "background_background": "classic",
    "background_color": "#F8FBF9",
    "padding": {"unit": "px", "top": "112", "bottom": "80", "left": "16", "right": "16", "isLinked": False}
})

# 2. Social Proof
social_proof = create_container("social-proof", [
    create_text("sp-label", "INTEGRAMOS COM OS MAIORES PORTAIS DO BRASIL", "#8c959b"),
    create_text("sp-icons", "ZAP | Viva Real | Chaves na Mão | Lopes | Quinto Andar | Net Imóveis", "#8c959b")
], settings={
    "padding": {"unit": "px", "top": "40", "bottom": "40", "isLinked": False},
    "border_style": "solid",
    "border_width": {"bottom": "1"},
    "border_color": "#e2e8f0"
})

# 3. Pain/Solution (2-Column Flex Row)
pain_solution_grid = create_container("ps-row", [
    create_column("ps-pain", [
        create_heading("ps-pain-title", "Sem o Albert", "h3", "#EF4444", font_size=22),
        create_text("ps-pain-list", "<ul><li>Lead chega às 22h e só responde amanhã</li><li>Corretores perdendo tempo com leads frios</li><li>Concorrente responde primeiro</li></ul>")
    ], width_pct="50", settings={"background_color": "#FEE2E2", "padding": {"unit": "px", "size": "30", "isLinked": True}, "border_radius": {"unit": "px", "size": 16}}),
    create_column("ps-sol", [
        create_heading("ps-sol-title", "Com o Albert", "h3", "#1E6751", font_size=22),
        create_text("ps-sol-list", "<ul><li>Resposta em 3 segundos</li><li>Leads chegam qualificados</li><li>Custo fixo previsível</li></ul>")
    ], width_pct="50", settings={"background_color": "#D1FAE5", "padding": {"unit": "px", "size": "30", "isLinked": True}, "border_radius": {"unit": "px", "size": 16}, "border_color": "#1E6751", "border_width": {"unit": "px", "size": "2", "isLinked": True}, "border_style": "solid"})
], direction="row")

pain_solution = create_container("pain-solution-section", [
    create_heading("ps-section-title", "O problema que custa caro e ninguém fala"),
    create_text("ps-section-desc", "A cada minuto que um lead espera, sua chance de conversão cai 80%."),
    pain_solution_grid
], settings={"background_color": "#F8FBF9", "padding": {"unit": "px", "top": "80", "bottom": "80", "isLinked": False}})

# 4. How It Works (Grid Preset)
how_it_works_inner = create_container("hiw-grid", [
    create_column(f"step-{i}", [
        create_heading(f"step-num-{i}", f"0{i}", "div", "#1E6751", font_size=40, weight="800"),
        create_heading(f"step-title-{i}", title, "h3", font_size=18),
        create_text(f"step-desc-{i}", desc)
    ], width_pct="25", settings={"background_color": "#FFFFFF", "padding": {"unit": "px", "size": "20", "isLinked": True}, "border_radius": {"unit": "px", "size": 12}})
    for i, (title, desc) in enumerate([
        ("Lead entra em contato", "WhatsApp, site ou portal."),
        ("Qualificação automática", "Entende busca, orçamento e urgência."),
        ("Visita agendada", "Na agenda do corretor disponível."),
        ("Venda fechada", "Lead quente, contexto completo.")
    ], 1)
], direction="row", is_inner=True, settings={"container_type": "grid", "grid_columns_grid": {"unit": "px", "size": 4}})

how_it_works = create_container("how-it-works-section", [
    create_heading("hiw-badge", "Simples de implementar", "div", "#1E6751", weight="600", font_size=14),
    create_heading("hiw-title", "Do lead à venda em 4 passos"),
    how_it_works_inner
], settings={"padding": {"unit": "px", "top": "80", "bottom": "80", "isLinked": False}})

# 5. Metrics (Dark Teal Row)
metrics_inner = create_container("m-row", [
    create_column(f"m-{i}", [
        create_heading(f"mv-{i}", val, "div", "#FFFFFF", font_size=44),
        create_heading(f"ml-{i}", label, "div", "#FFFFFF", font_size=16)
    ], width_pct="25") for i, (val, label) in enumerate([("< 60s", "1º Atendimento"), ("90%", "Aproveitamento"), ("100%", "Follow-up"), ("100%", "Qualificação")])
], direction="row", is_inner=True)

metrics = create_container("metrics-section", [
    create_heading("m-title", "Pare de queimar dinheiro", "h2", "#FFFFFF"),
    metrics_inner
], settings={"background_color": "#1E6751", "padding": {"unit": "px", "top": "80", "bottom": "80", "isLinked": False}})

# 6. Testimonials (3-Column Row)
testimonials_inner = create_container("t-row", [
    create_column(f"t-{i}", [
        create_heading(f"tm-{i}", metric, "div", "#1E6751", font_size=16),
        create_text(f"tq-{i}", f'"{quote}"'),
        create_heading(f"tn-{i}", name, "div", font_size=16),
        create_text(f"tr-{i}", role)
    ], width_pct="33.33", settings={"background_color": "#FFFFFF", "padding": {"unit": "px", "size": "24", "isLinked": True}, "border_radius": {"unit": "px", "size": 16}})
    for i, (quote, name, role, metric) in enumerate([
        ("Antes do Albert, perdíamos leads. Hoje, 100% são atendidos.", "Ricardo Silva", "Diretor Comercial", "+320% leads qualificados"),
        ("O agendamento foi um divisor de águas. Triplicamos as visitas.", "Mariana Costa", "CEO Elite Properties", "3x mais visitas"),
        ("Implementamos em um dia. ROI de 12x em 60 dias.", "João Pedro", "Gerente MyHouse", "ROI 12x")
    ])
], direction="row", is_inner=True)

testimonials = create_container("testimonials-section", [
    create_heading("t-badge", "Resultados Reais", "div", "#1E6751", font_size=14),
    create_heading("t-title", "Quem usa, não volta atrás"),
    testimonials_inner
], settings={"background_color": "#F8FBF9", "padding": {"unit": "px", "top": "80", "bottom": "80", "isLinked": False}})

# 7. Pricing (4-Column Row)
pricing_inner = create_container("p-row", [
   create_column(f"plan-{name}", [
       create_heading(f"pn-{name}", name, "div", font_size=32),
       create_text(f"pa-{name}", atend),
       create_button(f"pb-{name}", "Falar com consultor")
   ], width_pct="25", settings={"background_color": "#FFFFFF", "padding": {"unit": "px", "size": "24", "isLinked": True}, "border_radius": {"unit": "px", "size": 16}, "border_color": "#e2e8f0", "border_style": "solid", "border_width": {"unit": "px", "size": "1", "isLinked": True}})
   for name, atend in [("500", "500 atendimentos/mês"), ("1000", "1.000 atendimentos/mês"), ("1500", "1.500 atendimentos/mês"), ("2000", "2.000 atendimentos/mês")]
], direction="row", is_inner=True)

pricing = create_container("pricing-section", [
    create_heading("p-badge", "Investimento", "div", "#1E6751", font_size=14),
    create_heading("p-title", "Escolha o plano ideal"),
    pricing_inner
], settings={"padding": {"unit": "px", "top": "80", "bottom": "80", "isLinked": False}})

# 8. FAQ (Accordion)
faq = create_container("faq-section", [
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
], settings={"background_color": "#F8FBF9", "padding": {"unit": "px", "top": "80", "bottom": "80", "isLinked": False}})

# 9. Final CTA
final_cta = create_container("final-cta-section", [
    create_heading("fcta-title", "Cada minuto sem o Albert é um lead perdido", "h2", "#FFFFFF"),
    create_text("fcta-desc", "Comece agora. Em 24 horas seu atendimento estará automático.", "#FFFFFF"),
    create_button("fcta-btn", "Falar com especialista", "#FFFFFF", "#1E6751")
], settings={"background_color": "#1E6751", "padding": {"unit": "px", "top": "100", "bottom": "100", "isLinked": False}})

data = {
    "content": [hero, social_proof, pain_solution, how_it_works, metrics, testimonials, pricing, faq, final_cta],
    "page_settings": {"entrance_animation": "fadeInUp"},
    "version": "0.4",
    "title": "Albert LP Fidelidade 100%",
    "type": "page"
}

output_path = "lp-fidelidade-elementor.json"
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"JSON gerado com sucesso em {output_path}")
