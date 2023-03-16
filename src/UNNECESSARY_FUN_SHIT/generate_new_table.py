import os

directory_database = os.path.expanduser("~/MyProjects/woodworker_project_manager/server/src/database")
directory_modules = os.path.expanduser("~/MyProjects/woodworker_project_manager/server/src/modules")

def generate_files(table_name: str):
  os.system(f"cd {directory_database}/entities && touch {table_name.capitalize()}.entity.ts")
  os.system(f"cd {directory_database}/interfaces && touch {table_name.lower()}.interface.ts")
  os.system(f"cd {directory_modules} && mkdir {table_name.lower()} && touch {table_name.lower()}.module.ts && touch {table_name.lower()}.controller.ts && touch {table_name.lower()}.service.ts")

generate_files()