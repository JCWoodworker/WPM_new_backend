import os

# This script will generate a new table in the database (entity and interface), and a new module, controller, ans service in a directory named after the table within the modules directory

new_table_name = input("\nEnter the name of the new table: ")



directory_database = os.path.expanduser("~/MyProjects/woodworker_project_manager/server/src/database")
directory_modules = os.path.expanduser("~/MyProjects/woodworker_project_manager/server/src/modules")

def write_entity():
  with open(f"{directory_database}/entities/{new_table_name.capitalize()}.entity.ts", "w") as entity_file:
    entity_file.write(f"import {{ Entity, Column, PrimaryGeneratedColumn }} from \'typeorm\' \n\n\n")
    entity_file.write(f"@Entity({{ name: \'{new_table_name.lower()}s' }})\n")
    entity_file.write(f"export class {new_table_name.capitalize()}Entity {{\n")
    entity_file.write(f"\t@PrimaryGeneratedColumn(\"uuid\")\n")
    entity_file.write(f"\t{new_table_name}Id: string;\n\n")
    entity_file.write(f"\t@Column({{}})\n")
    entity_file.write(f"\tname: string;\n\n")
    entity_file.write(f"}}")

def write_interface():
  with open(f"{directory_database}/interfaces/{new_table_name.lower()}.interface.ts", "w") as interface_file:
    interface_file.write(f"export interface {new_table_name.capitalize()}Interface {{ \n")
    interface_file.write(f"{new_table_name.lower()}Id?: string;\n")
    interface_file.write(f"name?: string;\n")
    interface_file.write(f"}}")

def create_module_directory():
  os.mkdir(f"{directory_modules}/{new_table_name}s")

def write_module():
  with open(f"{directory_modules}/{new_table_name}s/{new_table_name.lower()}.module.ts", "w") as module_file:
    module_file.write(f"import {{ Module }} from '@nestjs/common';\n")
    module_file.write(f"import {{ TypeOrmModule }} from '@nestjs/typeorm';\n")
    module_file.write(f"import {{ {new_table_name.capitalize()}sService }} from './{new_table_name.lower()}.service';\n")
    module_file.write(f"import {{ {new_table_name.capitalize()}Entity }} from '../../database/entities/{new_table_name.capitalize()}.entity';\n\n")
    module_file.write(f"@Module({{\n")
    module_file.write(f"\timports: [\n")
    module_file.write(f"\t\tTypeOrmModule.forFeature([{new_table_name.capitalize()}Entity])\n")
    module_file.write(f"\t],\n")
    module_file.write(f"\tproviders: [{new_table_name.capitalize()}sService],\n")
    module_file.write(f"\texports: [{new_table_name.capitalize()}sService]\n")
    module_file.write(f"}})\n")
    module_file.write(f"export class {new_table_name.capitalize()}sModule {{}}")


def write_controller():
    with open(f"{directory_modules}/{new_table_name}s/{new_table_name.lower()}.controller.ts", "w") as controller_file:
      controller_file.write(f"import {{\n")
      controller_file.write(f"\tController,\n")
      controller_file.write(f"\tGet,\n")
      controller_file.write(f"\tPost,\n")
      controller_file.write(f"\tBody,\n")
      controller_file.write(f"\tParam,\n")
      controller_file.write(f"\tUseGuards,\n")
      controller_file.write(f"\tRequest,\n")
      controller_file.write(f"}} from '@nestjs/common';\n\n")
      controller_file.write(f"import {{ JwtAuthGuard }} from 'src/auth/jwt-auth.guard';\n")
      controller_file.write(f"import {{ {new_table_name.capitalize()}Interface }} from 'src/database/interfaces/{new_table_name.lower()}.interface';\n")
      controller_file.write(f"import {{ {new_table_name.capitalize()}sService }} from './{new_table_name.lower()}.service';\n\n")
      controller_file.write(f"@Controller(\'{new_table_name.lower()}\')\n")
      controller_file.write(f"export class {new_table_name.capitalize()}Controller {{\n")
      controller_file.write(f"\tconstructor(private {new_table_name.lower()}sService: {new_table_name.capitalize()}sService) {{}}\n\n")
      controller_file.write(f"}}")

def write_service():
  with open(f"{directory_modules}/{new_table_name}s/{new_table_name.lower()}.service.ts", "w") as service_file:
    service_file.write(f"import {{ Injectable }} from '@nestjs/common';\n")
    service_file.write(f"import {{ InjectRepository }} from '@nestjs/typeorm';\n")
    service_file.write(f"import {{ Repository }} from 'typeorm';\n")
    service_file.write(f"import {{ {new_table_name.capitalize()}Interface }} from 'src/database/interfaces/{new_table_name.lower()}.interface';\n")
    service_file.write(f"import {{ {new_table_name.capitalize()}Entity }} from 'src/database/entities/{new_table_name.capitalize()}.entity';\n\n")
    service_file.write(f"@Injectable()\n")
    service_file.write(f"export class {new_table_name.capitalize()}sService {{\n")
    service_file.write(f"\tconstructor(\n")
    service_file.write(f"\t\t@InjectRepository({new_table_name.capitalize()}Entity)\n")
    service_file.write(f"\t\tprivate {new_table_name.lower()}Repository: Repository<{new_table_name.capitalize()}Entity>,\n")
    service_file.write(f"\t) {{}}\n\n")
    service_file.write(f"}}")

# write_entity()
# write_interface()

create_module_directory()

write_module()
write_controller()
write_service()