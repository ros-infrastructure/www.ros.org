def all_robots
  @items.find_all('/robots/*/index.md')
end

def all_robots_sorted_featured_first
  all_robots.sort_by do |each|
    [
      each[:featured] ? 0 : 1,
      each.identifier,
    ]
  end
end

def all_robot_categories
  @items.find_all('/robots/_categories/*.md')
end

def all_robots_in_category(string)
  all_robots_sorted_featured_first.select { |each| robot_categories(each).include?(string) }
end

def category_url(string)
  "/robots/#{string}.html"
end

def robot_url(item)
  "/#{item.identifier.components[0..-2].join('/')}/"
end

def robot_image_url(item, key)
  robot_url(item) + item[key]
end

def robot_tags(item)
  robot_attribute_list(item, :tags)
end

def robot_categories(item)
  robot_attribute_list(item, :categories)
end

def robot_features(item)
  robot_attribute_list(item, :features)
end

def robot_attribute_list(item, key)
  item[key] || []
end
